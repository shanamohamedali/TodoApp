import React, { useState } from "react";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoButton } from "../TodoButton/TodoButton";
import "./TodoEdit.css";

export function TodoEdit({ todoList,setTodoList,editItem, setEditItem }) {

  const[editedItem,setEditedItem]=useState("")
  //console.log("...dgasf",editItem.title)

  const handleChange = (e) => {
    setEditedItem(e.target.value);
  };
  const onClickSave=(id,text)=>{
    setTodoList(todoList.map((item)=>{
      if(item.id===id){
        [...item,
          title=text]
      }
    }))


  }

  return (
    <>
      {editItem.map((item) => (
        <div className="todoedit-container"  key={item.id}>
          <TodoInput
            onChange={handleChange}
            value={item.title}
            name="todoEdit"
            type="text"
            placeholder="Edit Todo Item.."
        
          />
          <TodoButton onClick={()=>onClickSave(item.id,e.target.value)} label="SAVE" />
          <TodoButton onClickCancel="" label="CANCEL" />
        </div>
      ))}
    </>
  );
}
