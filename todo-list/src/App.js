import React from "react";
import "./App.css";
import {useState} from "react";
import formtodo from "./componenets/formtodolist"
import TDED from "./componenets/todoED"
// import AddUIItem from "./TodoList";

const App = () => {
  const [todo,setTodo] = useState("");
  const[todos,setTodos]= useState([]);
  const[Updid,setUpdid]= useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (Updid){
      const UpdateTodo = todos.find((i) => i.id === Updid);
      const updatedTOdos = todos.map((t) => 
        t.id === Updid.id
          ?(t={id:t.id,todo})
          :{id:t.id,todo:t.todo}
      );
      setTodos(updatedTOdos);
      setUpdid(0)
      setTodo("")
      return;
    }

    if (todo !==''){
      setTodos([{id: `${todo}-${Date.now()}`,todo}, ...todos]);
      setTodos("");
    }
  };
  const handleDelete=(id)=> {
    const deletetodo =todos.filter((to)=>to.id !== id);
    setTodos([...deletetodo])
  };
  const handleUpdate=(id)=> {
    const updatetodo =todos.find((i) => i.id == id);
    setTodos(updatetodo.todo);
    setUpdid(id);
  };


  return(
   <div className="App">
     <div className = "border">
       <h1 className = "title">TODO LIST</h1>
       <br></br>
       <formtodo
       handleSubmit={handleSubmit}
       todo={todo}
       Updid={Updid}
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