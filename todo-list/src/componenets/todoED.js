import react from "react";

const TDED = ({todos, handleDelete, handleUpdate,handleComplete}) => {
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
                    <label><input type= "checkbox" onChange= {() => handleComplete("completed")}>completed</input></label>
                </li>
            ))}
      </ul>
    )}

export default TDED;