import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
ReactDOM.render(<App />,document.getElementById("root"))
const twitter=document.getElementById("twitter")
const facebook=document.getElementById("facebook")
const github=document.getElementById("github")
twitter.addEventListener("click",()=>{window.location.href = 'https://twitter.com/aggarwal_divay';})
facebook.addEventListener("click",()=>{window.location.href = 'https://www.instagram.com/divay6677/';})
github.addEventListener("click",()=>{window.location.href = 'https://github.com/divay805';})