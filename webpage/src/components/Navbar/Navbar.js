import React from 'react'
import "./Navbar.css"
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom"




function Navbar(){

    return (
        <div className={style.navbar}>
             <NavLink to="/" exact className={style.h3}>Logo</NavLink>
             <ul className={style.navlinks}> 
                 <NavLink to="/whatwedo" className={style.linkItem}>What we do</NavLink>
                 <NavLink to="/locations" className={style.linkItem}>Locations</NavLink>
                 <NavLink to="/contactus" className={style.linkItem}>Contact us</NavLink>
             </ul>

        </div>
    )
}

export default Navbar
