import { Box, Grid } from '@mui/material'
import React from 'react'
import Game from '../Game/Game'
import './FeatureGame.css'

export default function FeatureGame({ listGame }) {
  console.log(listGame)
    const list = listGame.slice(0, 3)
    console.log(list)
    return (
        <>
            <div className='title-game'>
                <h3>{"Feature Games"}</h3>
            </div>
            <div className='feature-box'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {list.map((data) => {
                            return (
                                <div>
                                    <Grid item xs={2}>
                                        <Game game={data} key={data.id}></Game>
                                    </Grid>
                                </div>

                            )
                        })}

                    </Grid>
                </Box>
            </div>

            {listGame.length > 3 && (
                <div className='view-more'>
                    <p>View more</p>
                </div>
            )}

        </>

    )
}