// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
/* this array works with the getDay() function
   defined in this file                       */
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


  var options = {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  }
  var aDay = today.toLocaleDateString("en-US", options);

    res.render("list", {whatDay: aDay});

})

app.listen(port, ()=>{
  console.log("Running on port 3000, press ^C to exit");
})
