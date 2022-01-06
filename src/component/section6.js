import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { useMediaQuery } from '@mui/material';

import Slidercarousel from './carousel';

function Section6() {
    const mobile =  useMediaQuery('(min-width:900px)')
    return (
        <div>
            
            <img src="./Vector.svg" alt="" style={{position:"absolute",width:"24%",marginTop:"398px",right:"0"}}/>
          <Box className='main_parent3'>
            <Box>
            <Typography className='section2_heading2'
                style={{ display: "flex", justifyContent: "center" }}>
                Testimonials 
            </Typography>
            <Typography className='section6'>Blockgames is a new program... But here are testimonials from students who have attended other programs by it’s creators.</Typography>
            </Box>
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        {mobile ?  <img src='./testimonial1.svg' width="100%" alt=''/> : ""}
                      
                    </Grid>
                    <Grid item xs={12} md={6}>
                  <Slidercarousel/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        {mobile ?   <img src='./testimonial2.svg' width="100%" alt=''/> : ""}
                       
                    </Grid>
                </Grid>
            </Box>
            </Box>
        </div>
    )
}

export default Section6
