import { Grid, LinearProgress } from '@mui/material'
import React from 'react'
import './Jam.css'

export default function Jam ({jam}){
  
    const progress= 50
    return (
        <>
            <div className='jam-container'>
                <img src={jam.thumbnailImageUrl} className='image-thumbnail'></img>
                <h3>{jam.name}</h3>
                <p>{jam.hostProfiles.username}</p>
                <div className='progess'>
                    <p>{'Start in 14 days, 12 hours'}</p>
                    <div><LinearProgress variant="determinate" value={progress} /></div>
                    <span>{jam.joinedCount}</span>
                    <span>{jam.submissionCount}</span>
                </div>
                
            </div>
        </>
    )
}