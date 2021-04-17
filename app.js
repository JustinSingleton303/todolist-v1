// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

var dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function getDay(inDay){
  var tDay = "";
  var n = dayOfWeek.length;
  for(var i = 0; i < n; i++){
    if(inDay === i){
      tDay = dayOfWeek[i];
    }
  }return tDay;
}



app.get('/', (req, res)=>{
  var today = new Date();
  var dayNum = today.getDay();
  var day = getDay(dayNum);

    res.render("list", {whatDay: day});

})

app.listen(port, ()=>{
  console.log("Running on port 3000, press ^C to exit");
})
