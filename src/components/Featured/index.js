import React from 'react'
import style from './style.module.css'
import Card from '../Card'
import Video from '../Video'
const Featured = ({cards,ShopF,func}) => {
  return (
    <>
    <h1>Featured</h1>
    <div className={style.Featured}>

        {
            cards ? cards.map((card,cid) =>(
              <Card key={cid} func={func} card={card} New={card.New} ShopF={ShopF}/> 
            )):<></>
        }
    </div>
    </>
  )
}

export default Featured;