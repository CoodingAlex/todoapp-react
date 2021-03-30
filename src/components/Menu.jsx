import React from 'react';
import MenuItem from 'Components/MenuItem'
import '@styles/components/Menu.scss'
const Menu = ({ setMenu }) => {
  return (
    <div className='menu' >
      <MenuItem setMenu={setMenu} type="All"/>
      <MenuItem setMenu={setMenu} type="Active"/>
      <MenuItem setMenu={setMenu} type="Completed"/>
    </div>
  );
};

export default Menu
