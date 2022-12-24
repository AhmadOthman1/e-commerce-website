import React from 'react'
import './style.css'


const MenuItem = (
    {
        title
    }
) => {
  return (
    <div className='menuButton'>
    <a href={'/'+title}>{title.toUpperCase()}</a>
    </div>
  )
}

export default MenuItem;