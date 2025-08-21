import React  from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, NavLink, Route, Routes,Link} from "react-router-dom";

export default class App extends React.Component{
  render(){
    return <>
    
    <BrowserRouter>
    <NavLink className="navLink">
<ul>
  <li><Link to='/'className="navLink">Home</Link></li>
  <li><Link to='/about'className="navLink">About</Link></li>
  <li><Link to='/contact'className="navLink">Contact</Link></li>
</ul>
</NavLink>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    
    </Routes>
    
    </BrowserRouter>
    </>
  }
}