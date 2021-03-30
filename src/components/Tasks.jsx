import React from 'react';
import Task from 'Components/Task'
import '@styles/components/Tasks.scss'
const Tasks = ({ mytasks, setMytasks, menu }) => {
  const handleDeleteAllButton = e => {
    setMytasks(actualTasks => actualTasks.filter(task => task.state !== 'completed'))
  }
  return (
    <div className='tasks'>
      {mytasks.map(task =>{
        if(menu === "All"){
          return <Task menu={menu} setMytasks={setMytasks} key={task.id} id={task.id} state={task.state} value={task.value}/>
        }
        if(menu === "Active"){
          if(task.state === "active"){
            return <Task menu={menu} setMytasks={setMytasks} key={task.id} id={task.id} state={task.state} value={task.value}/>
          }
          return
        }
        if(menu === "Completed"){
          if(task.state === "completed"){
            return <Task menu={menu} setMytasks={setMytasks} key={task.id} id={task.id} state={task.state} value={task.value}/>
          }
          return
        }
      })
      }
      {

        menu === "Completed" && <button className="delete__all-tasks" onClick={handleDeleteAllButton}>delete all</button>
      }
      
    </div>
  )
};

export default Tasks;
