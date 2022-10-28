import React from "react";

const Formtodo = ({ todo, setTodo, handleSubmit, updid }) => {
    return (
        <form className="inputTodo" onSubmit={handleSubmit}>
            
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">{updid ? "Update" : "Go"}</button>
        </form>

    );
}
export default Formtodo