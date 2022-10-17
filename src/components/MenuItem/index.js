import React from 'react'
import './style.css'


const MenuItem = (
    {
        title
    }
) => {
  return (
    <div className='menuButton'>
    <a>{title}</a>
    </div>
  )
}

export default MenuItem;