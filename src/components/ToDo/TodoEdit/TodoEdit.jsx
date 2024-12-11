import React, { useState } from "react";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoButton } from "../TodoButton/TodoButton";
import "./TodoEdit.css";

export function TodoEdit({ todoList,setTodoList,editItem, setEditItem }) {

  const[editedItem,setEditedItem]=useState(" ")
  console.log("...dgasf",editItem[0].title)

  const handleChange = (e) => {
    setEditedItem(e.target.value);
  };
  const onClickSave=(id,text)=>{
  }

  return (
    <>
        <div className="todoedit-container">
          <TodoInput
            onChange={handleChange}
            value={editItem[0].title}
            name="todoEdit"
            type="text"
            placeholder="Edit Todo Item.."
        
          />
          <TodoButton onClick={()=>onClickSave(editItem[0].id,e.target.value)} label="SAVE" />
          <TodoButton onClickCancel="" label="CANCEL" />
        </div>
    </>
  );
}
