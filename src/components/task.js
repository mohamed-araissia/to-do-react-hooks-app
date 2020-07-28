import React, {useState} from "react"




export default function Task({
  tasks,
  id,
  title,
  deleteTask,
  updateTask,
  completeTask
}) {
  const [updateMode, setUpdateMode] = useState(false)
  const [titleToUpdate, setTitleToUpdate] = useState(title)
  const handleUpdateTask = () => {
  updateTask(id, titleToUpdate)
  setUpdateMode(false)
  }
  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div>
            {/* <div  style={{ textDecoration: todos[index].isCompleted ? "line-through" : "" }}>{title} </div> */}
        <div className="title" >
              {title} 
            </div>
          </div>
          <div className="actions">
            <div>
              <button className='deletebutton' onClick={() => deleteTask(id)}>delete</button>
              <button  className='updatebutton' onClick={()=>setUpdateMode(true)}>update</button>
              {/* <button  className='copletebutton' onClick={()=>completeTask(id)}>Done</button> */}

            </div>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={e => setTitleToUpdate(e.target.value)}
          />
         
          <button className="updatebutton" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  )
}