import React from "react";

const formtodo =({}) => {
    return(
        <form clasName ="inputTodo" onSubmit={handleSubmit}>
            <input 
            type ="text" 
            value ={todo}
            onChange={(e)=>SetTodo(e.target)}
            />
           <button type= "submit">{Updid ? "Update":"Go"}</button> 
        </form>

    );
}
export default formtodo