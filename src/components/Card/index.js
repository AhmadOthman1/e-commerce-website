import React from 'react'
import style from './style.module.css'
const Card = ({card,New,ShopF,func}) => {
  return (
    <div className={style.card} >
      <img src={`../${card.imgPath}`}/>
      {
        New ? <div className={style.newIcon}>New</div>: <></>
      }
      <img onClick={func ? ()=>func(): null} className={style.middleImg} src={'Buttons/M.png'}/>
      {card.category ? <div className={style.category}>{card.category}</div> : <></>}
      {
        !ShopF ?
        <>
          <p>Pueraria Mirifica And Study Phyto Estrogens</p>
          <span>${card.Price}</span>
        </>:<></>
      }
    </div>
  )
}

export default Card