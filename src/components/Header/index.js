import React from 'react'
import './style.css'

const Header = (
    {
        title
    }
) => {
  return (
    <div className='navTop'>
        <p>{title}</p>
    </div>
  )
}

export default Header;