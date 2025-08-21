import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component{

constructor(){
  super();
  this.state={
    isModelOpen:false
  }
}
openModel=()=>{
  this.setState({isModelOpen:true});
}
closeModel=()=>{
  this.setState({isModelOpen:false});
}

  render(){
    return<>
    <div>
    <button onClick={this.openModel}>Open Model</button>
   {this.state.isModelOpen && (<div className="model-overlay">
<div className="model-content">

<h2>Model Title</h2>
<p>Model Content</p>
<button onClick={this.closeModel}>Close</button>

</div>

   </div>)}
</div>
    </>
  }
}

