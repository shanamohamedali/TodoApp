import React, { useState } from "react";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoButton } from "../TodoButton/TodoButton";
import "./TodoEdit.css";

export function TodoEdit({ todoList,setTodoList,editItem, setEditItem }) {

  //const[editedItem,setEditedItem]=useState(" ")
  //const{id,title,completed}=editItem;
  console.log("...dgasf",editItem.title)
  const [error,setError]=useState("")

  const handleChange = (e) => {
    setEditItem({...editItem,
      title:e.target.value,
    });

  };
  const handleChangeSave=(e)=>{
    e.preventDefault();
    if(editItem.title !== ""){
      const editedTodo=todoList.map((item)=>{
        if(item.id===editItem.id)
        return{
          ...item,
          title:editItem.title
        }
        return item
      })
      //console.log("...",editedTodo)
      setTodoList(editedTodo)
      setEditItem("")
     
    }else{
      setError("Input is required, enter the edited task")
    }
  }

  return (
    <>
        <div className="todoedit-container">
          <TodoInput
            onChange={handleChange}
            value={editItem.title}
            name="edit-input"
            type="text"
            placeholder="Edit Todo Item.."
        
          />
          <TodoButton onClick={handleChangeSave} label="SAVE" />
          <TodoButton onClick={()=>setEditItem("")} label="CANCEL" />
        </div>
        {error && (<p className="error">{error}</p>)}
    </>
  );
}
