import React from 'react';

const Task = ({ value, state, setMytasks, id, menu }) => {
  const handleInputChange = e => {
    let currentState = e.target.checked ? 'completed' : 'active'
    setMytasks(actualTasks => actualTasks.map(task => {
      if(task.id === id){
        task.state = currentState
      }
      return task
    }))
  }

  const handleDeleteButton = e => {
    setMytasks(actualTasks => actualTasks.filter(task => task.id !== id))
  }
  return (
    <div className='task'>
      <input type="checkbox" checked={state === 'completed' ? true : false} readOnly onClick={handleInputChange}/>
      {state === 'completed' ?
        <span class="completed">{value}</span>
        :
        <span>{value}</span>
      }

      {
        menu === 'Completed' ?
        <button className="delete_task" onClick={handleDeleteButton}>delete</button>
        :
        ''
      }
    </div>
  );
};

export default Task;
