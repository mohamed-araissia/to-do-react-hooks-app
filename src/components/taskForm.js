import React, { useState} from "react"




function TaskForm({addTask}) {
    const [title, setTitle]=useState("")
   
   
    const handleAddTask=()=>{
      addTask(title)
      setTitle("")
    }
  
    return (
      <div className="task-form">
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
       
        <button className="addbutton" onClick={handleAddTask}>
          Add a task
        </button>
      </div>
    )
}
export default (TaskForm)