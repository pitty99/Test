import { Box, Grid } from '@mui/material'
import React from 'react'
import Jam from '../Jam/Jam'
import './FeatureJam.css'

export default function FeatureJam({ listJam }) {
   
    const list = listJam.slice(0,3)
    return (
        <>
            <div className='title-jam'>
                <h3>{"Feature Jam"}</h3>
            </div>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {list.map((data) => {
                            return (
                                <div>
                                    <Grid item xs={2}>
                                        <Jam jam={data} key={data.id}></Jam>
                                    </Grid>
                                </div>

                            )
                        })}

                    </Grid>
                </Box>
            </div>

            {listJam.length > 3 && (
                <div className='view-more'>
                    <p>View more</p>
                </div>
            )}

        </>

    )
}