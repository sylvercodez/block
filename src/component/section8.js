import { Grid, Typography,Button, Box} from '@mui/material'
import React from 'react'
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Register from "./register";
function Section8() {
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
        <Box>
       
        <Box className='main_parent3'>
        <div className='section8'>
        <img src="./shape1.svg" alt=""  width="10%" className='image4'/>
            <Typography className='section8_heading2'>
            Enough Talk... Click on the button below to Enroll
            </Typography>
            <Box>
            <Button onClick={handleClickOpen} variant="contained" className='buttondetails2' style={{background:'#2C2C2C'}}>
                           <Typography>Enroll Now</Typography>
                           <CallMadeSharpIcon  style={{paddingLeft:"4px"}}/>
                        </Button> 
            </Box>
            <img src ="./shape2.svg" alt=""  width="10%" className='image5' />
        </div>
        
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
        <img src="./Vector(1).svg" alt="" style={{position:"absolute",width:"22%",bottom:"0"}}/>
      </Dialog>
    </Box>
    )
    
}

export default Section8
