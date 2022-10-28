import React from "react";
import "./App.css";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formtodo from "./componenets/formtodolist"
import TDED from "./componenets/todoED"
import logo from "../src/download.jpg"
// import AddUIItem from "./TodoList";

const App = () => {
  const [todo,setTodo] = useState("");
  const[todos,setTodos]= useState([]);
  const[updid,setUpdid]= useState(0);
  const[completed,setCompleted]= useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if (updid){
      const UpdateTodo = todos.find((i) => i.id === updid);
      const updatedTOdos = todos.map((t) => 
        t.id === updid.id
          ?(t={id:t.id,todo})
          :{id:t.id,todo:t.todo}
      );
      setTodos(updatedTOdos);
      setUpdid(0)
      setTodo("")
      return;
    } else if (todo !==''){
      setTodos([{id: `${todo}-${Date.now()}`,todo}, ...todos]);
      setTodo("");
    }
  };
  const handleDelete=(id)=> {
    const deletetodo =todos.filter((to)=>to.id !== id);
    setTodos([...deletetodo])
  };
  const handleUpdate=(id)=> {
    const updatetodo =todos.find((i) => i.id === id);
    setTodos(...updatetodo);
    setUpdid(id);
  };

  const handleComplete =(id)=>{
    const completetodo =todos.find((i) => i.id ===id);
    setTodos(...completetodo.todo);
    setCompleted(true)


  }

  return(
   <div className="App">
     <div className = "border">
       <h1 className = "title">TODO LIST</h1>
       {/* <img src={logo} className="title" alt="logo" /> */}
       <Formtodo
       handleSubmit={handleSubmit}
       todo={todo}
       updid={updid}
       setTodo={setTodo}
      />
       <TDED
       todos={todos}
       handleUpdate={handleUpdate}
       handleDelete={handleDelete}
       />
     </div>
  </div>
  )};
export default App;