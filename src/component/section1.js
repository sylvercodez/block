import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import CallMadeSharpIcon from "@mui/icons-material/CallMadeSharp";
import Animate from "./animate";
import '../App.css';
function Section1() {
  return (
    <div style={{backgroundColor:"#1e2231"}}>
   
     {/* <img src="./Background1.svg" alt="" style={{position:"",width:'100%',height:'100%'}}/> */}
      <Box className='main_parent_1' >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography className='detail1'>The Time is now...</Typography>
          <Typography className='heading1'>
            Learn to Solve Problems by Leveraging Blockchain Technology 🔥
          </Typography>
          <Typography className='detail2'>
            Through this 8 week program, you will learn how to build for the
            most popular blockchains, then you will compete against others to
            build the best projects.
          </Typography>
          <Box className='buttonbox'>
            <Grid item xs={12} md={6}>
              <Button variant="contained" className='buttondetails1'>
                <Typography>Enroll Now</Typography>
                <CallMadeSharpIcon style={{paddingLeft:"4px"}} />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="outlined" className='buttondetails2'>
                Learn More
              </Button>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Animate /> 
            
          </Box>
        </Grid>
      </Grid>
      </Box>
    </div>
  );
}

export default Section1;
