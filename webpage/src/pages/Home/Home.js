import React from 'react'
import style from "./Home.module.css"
import Header from "../../components/Header/Header"
import imageAdventure from "./image.jpg"
import OurStory from "../../components/OurStory/OurStory"


function Home() {
    return (
        <div className={style.wrapper}>
            <Header/>            
            <div className={style.image}>
            <img  src={imageAdventure} />
            </div>
            <OurStory/>


            
            
        </div>
    )
}

export default Home
