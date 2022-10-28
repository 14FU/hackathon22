import react from "react";

const TDED = ({todos, handleDelete, handleUpdate,handleComplete,setCompleted,completed}) => {
    return(
        <ul className = "inputDisp">
            {todos.map((t)=>(
                <li className= "groupDisp">
                    <span className="titleDisp" key={t.id}>
                    {t.todo}  
                    </span>
                    <br/>
                    <button onClick ={()=>handleUpdate(t.id)}>Update</button>
                    <br/>
                    <button onClick={()=> handleDelete(t.id)}>Delete</button>
                    <br/>
                    <input type= "checkbox"onChange={(e) => setCompleted(e.target.completed)}/>
                    <label onClick ={()=> handleComplete(t.id)}>Mark as complete</label>
                </li>
            ))}
      </ul>
    )}

export default TDED;