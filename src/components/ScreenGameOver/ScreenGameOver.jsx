import React from 'react'
import './ScreenGameOver.css'


export default function ScreenGameOver(props) {
    console.log(props.status)
    return (
        <div className='screen'>
            <h1 className='gameover-heading'> {props.status}</h1>
            {/* <h3>{props.winningStreak}</h3> */}
            <h2 className='gameover-subheading'>Don't Worry, you'll get him next time!</h2 >
            <button
             className='playAgainBtn'
             onClick={props.onClick} 
             > Play Again? </button>
        </div>
    )
}
