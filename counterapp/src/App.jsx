import React from "react";
import ReactDOM  from "react-dom";
import "./App.css";

class App extends React.Component
{
constructor(){
  super();
  this.state={
    isDarkMode:false
  }
}
toggleTheme=()=>{
  this.setState({isDarkMode:!this.state.isDarkMode});
}

  render(){


  
return<>
<div className={this.state.isDarkMode?'app dark':'app light'}>
<h1>{this.state.isDarkMode?'Dark Mode':'Light Mode'}</h1>
<button onClick={this.toggleTheme}>Switch To{this.state.isDarkMode?'Light Mode':'Dark Mode'}</button>

</div>
</>
  }
}
export default App;