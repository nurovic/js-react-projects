import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { MainContext } from "./context";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  const firstRender = useRef(true);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: inputValue,
        id: uuidv4(),
      },
    ]);
    setInputValue("");
  };
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      localStorage.setItem("Todo", JSON.stringify([...todos]));
    }
  }, [todos]);

  useEffect(() => {
    if (localStorage.getItem("Todo") !== null) {
      const newTodos = localStorage.getItem("Todo");
      setTodos(JSON.parse([...todos, newTodos]));
    }
  }, []);
  const data = {
    addTodo,
    todos,
    inputValue,
    setInputValue,
    removeTodo,
  };
  return (
    <MainContext.Provider value={data}>
      <Input />
      <TodoList />
    </MainContext.Provider>
  );
};

export default App;
