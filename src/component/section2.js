import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import CallMadeSharpIcon from "@mui/icons-material/CallMadeSharp";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Register from "./register";

function Section2() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
          <img src="./Vector.svg" alt="" className="vector"/>
      <Box className='main_parent'>
        <Grid container spacing={3} style={{ alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <img
              src="./image2.png"
              alt=""
              className='headerImage2'
            ></img>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className='section2_heading2'>
              What is it? <span> 🤔</span>
            </Typography>
            <Typography className='section2_details'>
              A highly competitive game competition focusing on blockchain
              technology and how to leverage it for solving real life problems.
              <br />
              <br />
              The program is divided into 2 phases, phase one is basic intro
              into blockchain where you’ll be allowed to learn as much as
              possible about blockchain.
              <br />
              <br />
              Phase two is the game phase, where you’ll be applying everything
              you have learned during the intro phase and before the intro phase
              (on your own) to try and survive the various challenges that will
              be thrown your way.
            </Typography>
            <Button
              variant="contained"
              className='buttondetails2'
              onClick={handleClickOpen}
              style={{
                background:
                  " linear-gradient(180deg, #686868 0%, #2C2C2C 100%)",
              }}
            >
              <Typography>Enroll Now</Typography>
              <CallMadeSharpIcon style={{ paddingLeft: "4px" }} />
            </Button>
          </Grid>

        </Grid>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        style={{width:"100%", maxWidth:"800px",margin:'auto'}}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
         <Box style={{textAlign:"end"}} onClick={handleClose}> <img src="./Vector2.png"  width="8%" style={{cursor:"pointer"}} alt='' /></Box>
        <Typography className='section2_heading2 ' style={{textAlign:"center"}}> Join The Next Cohort</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
<Register/>
          </DialogContentText>
        </DialogContent>
        <img src="./Vector(1).svg" alt="" style={{position:"absolute",width:"21%",bottom:"0"}}/>
      </Dialog>
    
    </div>
  );
}

export default Section2;
