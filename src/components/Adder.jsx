import React,{ useState } from 'react';
import '@styles/components/Adder.scss'

const Adder = ({ setActualId, setMytasks, actualId }) => {
  const [ inputValue, setInputValue ] = useState("")
  const handleInputChange = e => {
    setInputValue(e.target.value)
  }
  const handleClick = e => {
    setMytasks(actualTasks => [...actualTasks,{ id: actualId, value: inputValue, state: 'active' }])
    setActualId(actualId + 1)
    setInputValue("")
  }
  return (
    <div className='adder'>
      <input type="text" className="app__form--input" value={inputValue} onChange={handleInputChange}/>
      <button className="app__form--button" onClick={handleClick} >Add</button>
    </div>
  );
};

export default Adder;
