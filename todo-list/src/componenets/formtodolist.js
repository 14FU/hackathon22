import React from "react";

const formtodo =({todo,SetTodo,handleSubmit,updid}) => {
    return(
        <form clasName ="inputTodo" onSubmit={handleSubmit}>
            <input 
            type ="text" 
            value ={todo}
            onChange={(e)=>SetTodo(e.target)}
            />
           <button type= "submit">{updid ? "Update":"Go"}</button> 
        </form>

    );
}
export default formtodo