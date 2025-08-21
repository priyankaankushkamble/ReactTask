import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default class App extends React.Component{
  
  
  // event handler function
  showTest=()=>{

alert("Hey event executed");
  }
render(){
    return<>
    <div className="container mt-5">
    <input type="button" className="btn btn-danger"
    value="Call Function" onClick={this.showTest}/>
    
    </div>
    </>
  }
 }