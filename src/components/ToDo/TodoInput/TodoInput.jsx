import React from 'react'
import './TodoInput.css'

export function TodoInput({onChange,value,name,placeholder,type}) {
  return (
    <div className='todo-input-container'>
      <input type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      contentEditable="true"
      />
    </div>
  )
}


