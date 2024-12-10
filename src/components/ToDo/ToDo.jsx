import React, { useState } from "react";
import "./ToDo.css";
import { TodoInput } from "./TodoInput/TodoInput";
import { TodoButton } from "./TodoButton/TodoButton";
import { TodoList } from "./TodoList/TodoList";
import { TodoEdit } from "./TodoEdit/TodoEdit";
let todoId = 0;

export function ToDo() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };
  const addTodoItem = () => {
    if (todoItem) {
      setTodoList((prev) => [
        ...prev,
        {
          id: todoId++,
          title: todoItem,
          completed: false,
        },
      ]);
    }
    setTodoItem("");
  };

  console.log("todoitem..", todoItem);
  console.log("todolist..", todoList);

  return (
    <div className="todo-main-container">
      <h2 className="heading">Todo List</h2>
      <div className="todo-input-section">
        <TodoInput
          onChange={handleChange}
          value={todoItem}
          name="toDoInput"
          type="text"
          placeholder="Add Todo Item.."
        />
        <TodoButton onClick={addTodoItem} label="ADD TODO" />
      </div>
      {todoList.length > 0 && (
        <div className="todo-input-section">
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      )}
    </div>
  );
}

export default ToDo;
