const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/submitData", (req,res)=>{
    let fileData = JSON.parse(fs.readFileSync('sample.json'))
    fileData.push(req.body);
    fs.writeFileSync('sample.json', JSON.stringify(fileData, null, 2)); 
    res.send({success: 200, message:'Data stored'});
});

app.get("/getDetails", (req, res)=>{
    let fileData = JSON.parse(fs.readFileSync('sample.json'))
    res.send({success: 200, details: fileData});
})

app.listen(5000, ()=>{console.log('Server is running')});