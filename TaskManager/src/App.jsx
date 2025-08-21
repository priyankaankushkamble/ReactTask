import React from "react";
import ReactDom from "react-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task:[]
    };
  }
  addTask=(taskName)=>{
    this.setState({task:[...this.state.task,taskName]});
    console.log(this.state.task.length);
  }
  render(){
    return<>
    <h1>I am Task Manager</h1>
    
  <TaskForm onAddTask={this.addTask}/>
  <TaskList tasks={this.state.task}/>
   </> 
  }
}
export default App;