const App = () => {
    const [todo,SetTodo] = useState("");
    const[todos,setTodos]= useState([]);
    const handleSubmit=(e)=>{
      e.preventDefault();
  
      if (todo !==''){
        setTodos([{id: `${todo}-${Date.now()}`,todo},...todos])
      }
  
    };
    return(
     <div className="App">
       <div className = "border">
         <h1 className = "title">Todo List</h1>
         <br></br>
          <div className = "adding">
            <form clasName ="inputTodo" onSubmit={handleSubmit}>
              <input type ="text" onChange={(e)=>SetTodo(e.target)}/>
             <button>Go</button> 
            </form>
            <ul className = "inputDisp">
              {todos.map((t)=>(
              <li className= "groupDisp">
                <span className="titleDisp" key={t.id}>{t.todo}</span>
                <button>Edit</button>
                <button>Delete</button>
              </li>
              ))}
            </ul>
            <form>
              
            </form>
          </div>
       </div>
    </div>
    )};
  export default App;