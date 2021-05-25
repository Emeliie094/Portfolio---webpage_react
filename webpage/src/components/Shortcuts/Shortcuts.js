import React from 'react'
import style from "./Shortcuts.module.css"

function Shortcuts() {
    return (
        <div className={style.container}>
            <div className={style.box1}>
                <h2>Are you curious about what we do?</h2>
                <p>Lorem ipsum dolor</p>
                <button>Read more</button>

            </div>
            <div className={style.box2}>
            <h2>Do you want to find out where we are located?</h2>
                <p>Lorem ipsum dolor</p>
                <button>Read more</button>
            </div>
            <div className={style.box3}>
            <h2>Find out how we can help you.</h2>
                <p>Lorem ipsum dolor</p>
                <button>Read more</button>
            </div>
            
        </div>
    )
}

export default Shortcuts
