// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  var today = new Date();
  if(today.getDay() === 6 || today.getDay() === 0){
    res.send("Party on, weekend peeps!!");
  }else{
    res.send("Time to get up and go to work...");
  }
})

app.listen(port, ()=>{
  console.log("Running on port 3000, press ^C to exit");
})
