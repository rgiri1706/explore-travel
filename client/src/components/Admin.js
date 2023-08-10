import React, { useEffect } from "react";
import '../App.css';
import { useState } from "react";
const Admin = () => {
    const [userData, setData ] = useState([]);
    useEffect(()=>{
        fetch('/getDetails').then(res=>res.json()).then(res=>setData(res.details));
    },[]);
    return (
        <div className="details">
            List of Enquiries

            {userData.map(data => {
            return (
                <div className="response-box">
                    <div>
                    name: {data.passenger_name}
                    </div>
                    <div>
                    Passenger Count: { data.passengerCount.label}
                    </div>
                    <div>
                    Interest: { data.interest.label}
                    </div>
                    <div>
                    Destination: { data.destination.label}
                    </div>
                    <div>
                    Budget: { data.budget.label}
                    </div>
                </div>
            );
            })}
        </div>
    );
}

export default Admin;