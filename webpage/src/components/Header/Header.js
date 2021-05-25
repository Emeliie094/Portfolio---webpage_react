import React from 'react'
import style from "./Header.module.css"
import headerImg from "./pexels-robert-forever-ago-2741648.jpg"

import Shortcuts from "../Shortcuts/Shortcuts"

function Header() {
    return (
        <div className={style.wrapper}>
            <div className={style.headerContainer}>
            <img  src={headerImg} />
            </div>

            <Shortcuts/>
            
        </div>
    )
}

export default Header
