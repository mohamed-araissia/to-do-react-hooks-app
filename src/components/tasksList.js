import React from 'react'
import Task from './task';




export default function TasksList({tasks, deleteTask, updateTask,completeTask}) {

  

 
    return (
      <div className="tasks-list">
       
        <div>
          { tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                deleteTask={deleteTask}
                updateTask={updateTask}
                completeTask={completeTask}
              >
              
              </Task>
            ))}
        </div>
      </div>
    )
}