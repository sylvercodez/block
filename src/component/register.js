import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonalDetails from './reg1';
import Step2 from './Step2';
import Step3 from './Step3';


const steps = [
    {
      label: <PersonalDetails />,
      
    },
    {
      label: <Step2 />,
     
    },
    {
      label: <Step3 />,
     
    },
  ];
export default function Register() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
    <Paper
      square
      elevation={0}
      sx={{
        width:"100%",
        alignItems: 'center',
     
        
        bgcolor: 'background.default',
      }}
    >
      
      <Typography>{steps[activeStep].label}</Typography>
      <Typography style={{textAlign:"center"}}>We have limited space, registering does not mean you’ll be admitted, but don’t worry, we’ll be having 2 cohorts per year, if you miss this one, you can join the next one.</Typography>
    </Paper>
    
    
        <Button size="small" variant="contained" style={{
                padding:"14.3px 65px",
                borderRadius:"66px",
                textTransform:"none", 
                display:"flex",
                textAlign:"center",
                margin:"auto",
                marginBottom:"15px",
                marginTop:"25px",
                background:
                  " linear-gradient(180deg, #686868 0%, #2C2C2C 100%)",
              }}  onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <ArrowForwardIcon style={{paddingLeft:"10px"}} />
          )}
        </Button>
      
    <MobileStepper
      variant="dots"
      steps={steps.length}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 600, flexGrow: 1 }}
      
      
    />
    </Box>
  );
}