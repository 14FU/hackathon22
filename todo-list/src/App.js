import React from "react";
import "./App.css";
// import AddUIItem from "./TodoList";

const App = () => {
  
  return(
   <div clasname="App">
     <div classname = "border">
     <h1>My Todo List</h1>
        <div classname = "adding">
          <form>
          <input type ="text"/>
          <button>Go</button> 
          </form>
          <ul>
            <li>
              <span>Learn React</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          </ul>
          <form>
            
          </form>
        </div>
     </div>
  </div>
  )};
export default App;