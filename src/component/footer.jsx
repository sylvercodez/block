import React from 'react'

function Footer() {
    let year = new Date().getFullYear();
    return (
        <div style={{backgroundColor:"#2C2C2C", height:"320px"}}>
            <p style={{textAlign:'center',color:"#fff",paddingTop:"210px"}}> Copyright   &copy; {year} Blockgames. All rights reserved.</p>
            <p style={{textAlign:'center',color:"#fff",paddingTop:"15px"}}>Follow us on</p>
        </div>
    )
}

export default Footer
