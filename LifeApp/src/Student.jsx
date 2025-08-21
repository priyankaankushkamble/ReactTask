import React from "react";
import ReactDOM from "react-dom";
import Marks from "./Marks";

export default class Student extends React.Component{
    constructor(props){
       super(props);
        this.state={
           rollno:100
        }
       
    }
    static getDerivedStateFromProps(props,state){
       
        return null;
    }
    incCount=()=>{
        this.setState({rollno:this.state.rollno+1});
    }
    render(){
       
        return<>
        <h1>I am Student Component My State{this.state.rollno}</h1>
       <Marks mpr={this.state.rollno}/>
       <br/>
       <button style={{width:"400px",height:"40px"}} onClick={this.incCount}>Increase Value Of Roll No</button>
        </>
    }
    componentDidMount(){

    }
}