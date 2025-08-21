import React from "react";
import ReactDOM from "react-dom";

let txtCss={
          width:"400px",
          height:"40px",
          margin:"10px",
          padding:"10px"
}

class TaskFrom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:""
        }
    }
acceptData=(e)=>{
    this.setState({input:e.target.value});
    
}
handleSubmit=(e)=>{
e.preventDefault();
if(this.state.input.length!=0 && this.state.input.trim()){
    this.props.onAddTask(this.state.input);
}
}
render(){
    return<>
    <div className="container bg-dark p-5">
    <form onSubmit={this.handleSubmit}>
    <input type="text" name="input" value={this.state.input} placeholder="Enter Task"style={txtCss} onChange={(e)=>this.acceptData(e)}/>
    <input type="submit" name="s" value="Add New Task" style={txtCss}></input>
    </form>
    </div>
    </>
}
}
export default TaskFrom;
