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
function Section4() {
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
      <img src="./Vector(1).svg" alt="" style={{position:"absolute",width:"25%",marginTop:"-178px"}}/>
      <Box className='main_parent3'>
      <Grid container spacing={2} className='container'>
        <Grid item xs={12} md={6}>
          <Typography className='section2_heading2'>
          When is it?
          </Typography>
          <Box>
            <Box style={{ display: "flex", alignItems: "baseline" }}>
              <img
                src="./Polygon 4.svg"
                alt=""
                style={{ paddingRight: "15px" }}
              />
              <Typography
                className='section2_details4'
                style={{ paddingBottom: "6px", width: "80%" }}
              >
                Developers & Designers (Interested in blockchain)
              </Typography>
            </Box>
            <br />
            <Box style={{ display: "flex", alignItems: "baseline" }}>
              <img
                src="./Polygon 5.svg"
                alt=""
                style={{ paddingRight: "15px" }}
              />
              <Typography
                className='section2_details4'
                style={{ paddingBottom: "6px", width: "80%" }}
              >
                Tech Enthusiast with ample knowledge of blockchain and how it
                works (not coders or developers)
              </Typography>
            </Box>
            <br />
            <Box style={{ display: "flex", alignItems: "baseline" }}>
              <img
                src="./Polygon 6.svg"
                alt=""
                style={{ paddingRight: "15px" }}
              />
              <Typography
                className='section2_details4'
                style={{ paddingBottom: "6px", width: "80%" }}
              >
                Beginners in tech / block chain looking at getting into
                blockchain
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            className='buttondetails2'
            onClick={handleClickOpen}
            style={{
                marginTop:'40px',
                marginBottom:"15px",
              background: " linear-gradient(180deg, #686868 0%, #2C2C2C 100%)",
            }}
          >
            <Typography>Enroll Now</Typography>
            <CallMadeSharpIcon style={{paddingLeft:"4px"}}/>
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="./image4.png" alt="" width="100%"  />
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

export default Section4;
