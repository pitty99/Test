import React from 'react'
import './Game.css'

export default function Game ({game}){
    console.log(game)
  
    return (
        <>
            <div className='jam-container'>
                <img src={game.thumbnailImageUrl} className='image-thumbnail'></img>
                <h3>{'Action'}</h3>
                <div className='description'>
                    <p>{"description description description description"}</p>
                </div>
               
            </div>
        </>
    )
}