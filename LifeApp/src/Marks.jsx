import React from "react";
import ReactDOM from "react-dom";

export default class Marks extends React.Component{
    constructor(props){
super(props);
this.state={
    mroll:this.props.mpr
}

    }
    static getDerivedStateFromProps(props,state){
        if(props.mgr!=state.mroll){
return {mroll:props.mpr};
        }
        else{
            return null;
        }
    }
    shouldComponentUpdate(){
        if(this.state.mroll<107){
            return true;
        }
        else{
            return false;
        }
    }

    render(){
        return<>
        <h1>I am Marks Component {this.state.mroll}</h1>
       
        </>
    }
    getSnapshotBeforeUpdate(prevProps,prevState,n){
        console.log("Before Update Props "+prevProps.mpr);
        console.log("Before Update State "+prevState.mroll);
    }
    componentDidUpdate(){
        console.log("Component Update Succesfully......");
    }
}