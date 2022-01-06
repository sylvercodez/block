import { Grid, Typography, Button, Box, Divider } from "@mui/material";
import React from "react";
import CallMadeSharpIcon from "@mui/icons-material/CallMadeSharp";

function Section3() {
  return (
    <div>
       <Box className='main_parent3'>
      <Typography
        className='section2_heading2'
        style={{ display: "flex", justifyContent: "center",}}
      >
        When Is It?
      </Typography>
      <Box className='main_section3'>
      <img src="./shape2.svg" alt=""  className='image3'/>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className="grid_box">
            <Typography className='section2_details2' style={{color:"#fff",paddingBottom:'6px'}}>Registration Open:</Typography>
            <img src="./open.png" alt=""  width='20%'/>
            <Typography className='dates_details'>
              January
              <br />
              5th 2022
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} className="grid_box">
            <Typography className='section2_details2' style={{color:"#fff",paddingBottom:'6px'}}>Registration close:</Typography>
            <img src="./close.png" alt=""  width='20%'/>
            <Typography className='dates_details'>
              January
              <br />
              5th 2022
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
            <Typography className='section2_details2' style={{color:"#fff",paddingBottom:'6px'}}>Registration Open:</Typography>
            <img src="./launch.svg" alt="" width='20%'/>
            <Typography className='dates_details'>
              January
              <br />
              5th 2022
            </Typography>
            
          </Grid>
        </Grid>
     
      </Box>
      </Box>
    </div>
  );
}

export default Section3;
