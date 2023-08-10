
import { useState } from 'react';
import Select from 'react-select';
import '../App.css';
import { destination, interest, passengers, budget } from '../constants';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [selectedDestination, setDestination] = useState(null);
  const [selectedInterest, setInterest] = useState(null);
  const [countPassenger, setCount] = useState(null);
  const [amount, setAmount] = useState(null);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleClick = () =>{
    fetch('/submitData', {
        method: 'post',
        body: JSON.stringify({
         passenger_name: name,
         destination: selectedDestination,
         interest: selectedInterest,
         passengerCount: countPassenger,
         budget: amount
        }),
        headers: {
          "Content-Type": "application/json",
        },
    }).then(res=>{
      window.location.reload();
      alert('Data is saved');
    });
  }
  return (
    <div className="App">
    <div className='menu-section'>
    <div>
      <input type='text' onChange={e=> setName(e.target.value)} value={name} placeholder='Enter name'/>
    </div>
    <div className='menu-option'>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 280,
            borderRadius: '0px',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
          }),
        }}
        defaultValue={selectedDestination}
        onChange={setDestination}
        placeholder="Where do you want to go ?"
        options={destination}
      />
       <Select
        defaultValue={selectedInterest}
        onChange={setInterest}
        options={interest}
        placeholder="Your Interest"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 280,
            borderRadius: '0px',
          }),
        }}
      />
       <Select
        defaultValue={countPassenger}
        onChange={setCount}
        options={passengers}
        placeholder="Number of travellers"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 280,
            borderRadius: '0px',
          }),
        }}
      />
       <Select
        defaultValue={amount}
        onChange={setAmount}
        placeholder="Budget Per Person"
        options={budget}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: 280,
            borderRadius: '0px',
          }),
        }}
      />
      <button className='button-style' onClick={handleClick}>Create My Trip Now</button>
    </div>
    <div onClick={()=> navigate('/admin')} style={{ cursor: 'pointer'}}>
        Go to Admin
    </div>
    </div>
    </div>
  );
}

export default Home;
