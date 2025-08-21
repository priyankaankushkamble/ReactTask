import React from "react";
import ReactDOM from "react-dom";

export default class Test extends React.Component{
    render(){
        return<>
        <h1>I am Test Component</h1></>
        }
        componentWillUnmount(){
console.log("Component unmounted");
        }
    }