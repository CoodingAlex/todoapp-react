import React, { useState } from 'react';
import '@styles/App.scss';
import Menu from 'Components/Menu.jsx';
import Tasks from 'Components/Tasks';
import Adder from 'Components/Adder';

const App = () => {
  const [ actualId, setActualId ] = useState(0)
  const [ menu, setMenu ] = useState("All")
  const [ mytasks, setMytasks ] = useState([])
  return (
    <div className='main__app'>
      <h1 className='app__title'>#todo</h1>
      <Menu  setMenu={setMenu} />
      <Adder  setActualId={setActualId} actualId={actualId} setMytasks={setMytasks}/>
      <Tasks menu={menu} mytasks={mytasks} setMytasks={setMytasks}/>
    </div>
  );
};

export default App;
