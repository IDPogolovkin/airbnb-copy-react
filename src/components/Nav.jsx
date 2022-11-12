import React from 'react'
import style from '../style.css'


const Nav = (props) => {
  return (
    <div>
        <link rel="stylesheet" href={style}></link>
        <nav>
            <img src={props.img} className="nav--logo"/>
        </nav>
    </div>
  )
}

export default Nav