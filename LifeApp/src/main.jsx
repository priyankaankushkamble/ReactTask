import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from "./Test.jsx";
import App from './App.jsx'

let root=document.getElementById("root1");
    createRoot(root).render(<Test/>)
    let removeComponent=()=>{
        console.log("remove method call");
        comp.removeComponent();

}
createRoot(document.getElementById('root')).render(<>
<button onClick={removeComponent}>Remove Component</button>
</>);

