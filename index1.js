import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currDate = new Date(2020,5,2,11);
currDate = currDate.getHours();
let greeting ="";
let cssStyle ={};

if(currDate>1 && currDate<12){
  greeting="Good Morning";
   cssStyle ="#00b894";
}else if (currDate>=12 && currDate<20){
  greeting="Good Afternoon";
  cssStyle ="orange";
}else if (currDate>=20 && currDate<24){
  greeting="Good Night";
  cssStyle ="black";
}

ReactDOM.render(
<>
<div><h1>Hello,<span style={{cssStyle}}>{greeting}</span></h1></div>
</> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
