import React from 'react'

const MenuItem = ({ type, setMenu }) => {
  return(
    <button class="app__menu--button" onClick={() => setMenu(type)} id="render__all__button">
      { type }
    </button>
  )
}

export default MenuItem
