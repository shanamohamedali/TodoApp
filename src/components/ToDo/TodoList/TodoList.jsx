import React, { useState } from "react";
import "./TodoList.css";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { TodoEdit } from "../TodoEdit/TodoEdit";

export function TodoList({ todoList, setTodoList }) {
  const [editItem, setEditItem] = useState("");

const handleCompleteToggle=(id)=>{
 setTodoList(todoList.map((item)=>{
    if(item.id===id){
      return{
        ...item,
        completed:!item.completed
      }
    }
    else{
      return item
    }
  }))
  //using index search
  //const newlist=[...todoList]
   //newList[index].completed = ! newList[index].completed;
  //setTodoList(newList)

  }

  
  const deleteTodoItem = (id) => {
    console.log("id...", id);
    setTodoList(todoList.filter((data) => data.id !== id));
  };

  console.log("..edititem", editItem);

  return (
  <div className="todo-list-containter">
    <div>
      <ul>
        {todoList.map((item,index) => (
          <div className="todo-item" key={item.id}>
            <li key={item.id}
             style={{textDecoration: item.completed ? "line-through" : "none"}} onClick={()=>handleCompleteToggle(item.id)}
             >
              {item.title}
              
            </li>
            <button
              // style={{ paddingRight: "40px"}}
              onClick={() =>
                  setEditItem({
                    ...editItem,
                    id: item.id,
                    title: item.title,
                    completed:item.completed
                  })
              }
            >
              <FaPen />
            </button>
            <button>
              <FaTrash onClick={() => deleteTodoItem(item.id)} />
            </button>
          </div>
        ))}
      </ul>
      </div>
      {editItem && (
        <div>
          <TodoEdit todoList={todoList} setTodoList={setTodoList} editItem={editItem} setEditItem={setEditItem}/>
        </div>
      )}
    </div>
  );
}
