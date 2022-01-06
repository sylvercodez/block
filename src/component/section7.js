import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

import { Grid, Typography,Button, Box} from '@mui/material'
const data = {
   
    rows: [
        {
            title: "How long is it?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Who runs it?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Where is it?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Why should I join",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

// const styles = {
//     // bgColor: 'white',
//     titleTextColor: "blue",
//     rowTitleColor: "blue",
//     // rowContentColor: 'grey',
//     // arrowColor: "red",
    
// };

const config = {
    animate: true,
    arrowIcon: <img src="./Vector.png" width="100%"/>,
    tabFocus: true
};

export default function Section7() {

    return (
        <div style={{marginBottom:"300px"}}>
             {/* <img src="./Vector(1).svg" alt="" style={{position:"absolute",width:"22%",marginTop:"584px"}}/> */}
            <Box className='main_parent3'>
          
            <Typography
        className='section2_heading2'
        style={{ display: "flex", justifyContent: "center" }}
      >
       FAQs
      </Typography>
            <Faq
                data={data}
                // styles={styles}
                config={config}
            />
            </Box>
            
          
        </div>
    );
}