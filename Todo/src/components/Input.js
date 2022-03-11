import React, { useContext } from "react";
import { MainContext } from "../context";

const Input = () => {
  const {addTodo, inputValue, setInputValue} = useContext(MainContext)

  return (
    <div className="input-container">
      <form onSubmit={addTodo}>
        <input 
        placeholder="Add Todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button" type="submit">Add</button>
      </form>
    </div>
  );
};

export default Input;
