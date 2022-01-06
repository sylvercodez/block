import React,{Fragment } from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper,Image, Box, Typography} from '@mui/material'
// import Button from '@mui/material/Button';

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
 
      
export default function SliderCarousel(props) {
  
{
    var items = [
        {

            Image: "./Testifier.svg",
            Descriptions: " HNGi8 literally changed my life!!!It was packed with so much learning and fun. Never seen anything quite like it. I’m so glad I decided to join.",
            Name: "Helen Culman",
            SubName: "HNGi8 Finalist"
        },
      {

            Image: "./Testifier.svg",
            Descriptions: " HNGi8 literally changed my life!!!It was packed with so much learning and fun. Never seen anything quite like it. I’m so glad I decided to join.",
            Name: "Helen Culman",
            SubName: "HNGi8 Finalist"
        },
      {

            Image: "./Testifier.svg",
            Descriptions: " HNGi8 literally changed my life!!!It was packed with so much learning and fun. Never seen anything quite like it. I’m so glad I decided to join.",
            Name: "Helen Culman",
            SubName: "HNGi8 Finalist"
        },
        
    ]
 
    return (
      
      

        <Carousel navButtonsAlwaysInvisible={true}
              indicators={true}
              IndicatorIcon={<HorizontalRuleIcon/>}
              >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      
    )
}
 
function Item(props)
{   
    return (
        <div >
            
             
               
            
            <Box className='testimonial'>
                <img src='./Quot.svg' alt='' width="25%" style={{position:'absolute',left:"41%"}} />
               
                
                <Typography className='testimonial_description'>{props.item.Descriptions}</Typography>
                <Box >
                <img src={props.item.Image} alt=""/>
                </Box>
                <Typography className='testimonial_names'>{props.item.Name }</Typography>
                <Typography className='testimonial_subname'>{props.item.SubName}</Typography>

             
            </Box>
           
            
        </div>
           
 
            
        
    )
}

}