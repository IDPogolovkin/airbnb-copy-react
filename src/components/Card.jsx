import React from 'react'
import style from '../style.css'


const Card = (props) => {
    let badgeText
    if (props.openSpots === 0){
        badgeText = 'SOLD OUT'
    }
    else if (props.location === 'Online'){
        badgeText = 'ONLINE'
    }
  return (
    <div>
        <link rel="stylesheet" href={style}></link>
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={`../../public/images/${props.imgStar}`} className="card--star" />
                <span>{props.stats.rating} </span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                {badgeText ? <span className="gray">{badgeText}</span> : <span className="gray">{props.location}</span>}
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    </div>
  )
}

export default Card