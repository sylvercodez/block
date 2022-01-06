import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Grid, Typography, Box } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: black;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 20px 20px !important;
  margin: 25px 28px;
  border: none;
  border-radius: 45px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #2C2C2C;
    color:#fff;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background: linear-gradient(180deg, #686868 0%, #2C2C2C 100%);
  }

  &.${tabUnstyledClasses.selected} {
    background: linear-gradient(180deg, #686868 0%, #2C2C2C 100%);
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  text-align: center;
  background-color: #F1F1F1;  
  padding: 75px 0px ;
  border-Radius: 36px;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #EDEDED;
  border-radius: 124px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  
`;

export default function Section5() {
  return (
      <div>
        
        <Box className='main_parent3' style={{justifyContent:"center"}}>
          <Typography
        className='section2_heading2'
        style={{ display: "flex", justifyContent: "center", textAlign:"center" }}
      >
        Phases Of The Program
      </Typography>
      <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>
          The Intro Phase  <img src="./i.svg" alt="" width='6%'style={{paddingLeft:'18px'}}/>
        </Tab>
        <Tab>The Game Phase <span style={{paddingLeft:'18px'}}>🎮</span></Tab>
      </TabsList>
      <TabPanel value={0}>
      <img src="./Vector (2).svg" alt="" style={{position:"absolute",width:"16%",marginTop:"-50px",right:'9vw'}}/>
      <img src="./Mask Group (1).svg" alt="" style={{position:"absolute",width:"12%",marginTop:"146px",left:'8vw'}}/>
        <img src="./female.svg" className="logo2" alt="" />
        <Box className='section5_details'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography className='section5'>
              A point of training. 4 weeks. Participants are required to study a
              couple of content in preparation for the actual program and attend
              live events plus group discussions. It is also a good way to
              reduce the number of participants and select only the very serious
              people. <br />
              <br />
              This phase is not about being an expert, it's about being able to
              follow the instructions and tutorials given. The mindset is, if
              you are not able to follow a basic set of instructions (specific
              instructions), it's not likely you'll do well out there. <br />
              <br />
              Participants are grouped into smaller divisions, they are required
              to meet at least once a week to discuss the content, work on tasks
              together and ensure the entire group survives this phase - we will
              add some twists and turns here to make things interesting.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className='section5_2'>
              <Typography>
                <b> Promotion Criteria:</b>
                <br />
                <br />
              </Typography>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Complete all course content
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Complete all assigned task based on course content
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Attend all group discussions (live group discussions)
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Complete final assignment (like a mini project)
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Publish a blockchain related article online and get engagement
                  on it *reference the program**
                  <br />
                  <br />
                </Typography>
              </Box>
              <i style={{fontWeight:300}}>*Those who do not get promoted will be advised to keep studying
              and join the next cohort. </i>
              
              <br/>
              <br/>
              <b>You get a certificate for completing
              this phase.sss</b>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={1}> <img src="./Male.png" className="logo3"  alt="" />
      <img src="./Vector (2).svg" alt="" style={{position:"absolute",width:"16%",marginTop:"-50px",right:'7vw'}}/>
      <img src="./Mask Group (1).svg" alt="" style={{position:"absolute",width:"12%",marginTop:"146px",left:'7vw'}}/>
      <Box className='section5_details'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography className='section5'>
              A point of training. 4 weeks. Participants are required to study a
              couple of content in preparation for the actual program and attend
              live events plus group discussions. It is also a good way to
              reduce the number of participants and select only the very serious
              people. <br />
              <br />
              This phase is not about being an expert, it's about being able to
              follow the instructions and tutorials given. The mindset is, if
              you are not able to follow a basic set of instructions (specific
              instructions), it's not likely you'll do well out there. <br />
              <br />
              Participants are grouped into smaller divisions, they are required
              to meet at least once a week to discuss the content, work on tasks
              together and ensure the entire group survives this phase - we will
              add some twists and turns here to make things interesting.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className='section5_2'>
              <Typography>
                <b> Promotion Criteria:</b>
                <br />
                <br />
              </Typography>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Complete all course content
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Complete all assigned task based on course content
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Attend all group discussions (live group discussions)
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Complete final assignment (like a mini project)
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box style={{display:'flex',alignItems:'baseline'}}>
                <FiberManualRecordIcon style={{ fontSize: "14px",paddingRight:'6px' }} />
                <Typography className='icon5'>
                  Publish a blockchain related article online and get engagement
                  on it *reference the program**
                  <br />
                  <br />
                </Typography>
              </Box>
              <i style={{fontWeight:300}}>*Those who do not get promoted will be advised to keep studying
              and join the next cohort. </i>
              
              <br/>
              <br/>
              <b>You get a certificate for completing
              this phase.sss</b>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </TabPanel>
      
    </TabsUnstyled>
    </Box>
      </div>
    
  );
}
