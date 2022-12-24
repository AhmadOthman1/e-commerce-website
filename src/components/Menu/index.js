import React from 'react'
import MenuItem from '../MenuItem';
import AvatarButton from '../AvatarButton';
import './style.css'


const Menu = (
    {
        logo,
        Items,
        avatars
    }
) => {
  return (
    <div className='navBar'>
      <div className='navLeft'>
        <a href='/'><h1 className='logo'>{logo?logo : "Logo"}</h1></a>
        <div className='navItems'>
          {Items?.map(title => {
              return <MenuItem title={title}/>
            })}
        </div>
      </div>
      <div className='navAvatars'>
      <MenuItem title="Login"/>
      {avatars?.map(avatar => {
            return <AvatarButton avatar={avatar}/>
          })}
      </div>
    </div>
  )
}

export default Menu;