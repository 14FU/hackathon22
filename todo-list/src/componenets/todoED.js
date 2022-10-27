import react from "react";

const TDED = ({}) => {
    return(
        <ul className = "inputDisp">
            {todos.map((t)=>(
                <li className= "groupDisp">
                    <span className="titleDisp" key={t.id}>
                    {t.todo}  
                    </span>
                    <button onClick ={()=>handleUpdate(t.id)}>Update</button>
                    <button onClick={()=> handleDelete(t.id)}>Delete</button>
                </li>
            ))}
      </ul>

    )
}

export default TDED;