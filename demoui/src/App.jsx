import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css';
import viteLogo from '/vite.svg'

let a=100;
let b=200;
let c=a+b;

function App() {
    return(
        <>
        <h1 className="headColor">First Value {a}</h1><br/>
        <h1 className="headColor">Second Value {b}</h1>
        <h1 className="headColor">Addition is {c}</h1>
        </>
    
    );
}

export default App;
