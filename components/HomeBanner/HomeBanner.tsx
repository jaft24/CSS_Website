import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { url } from 'inspector';

export default function HomeBanner() {
  return (
    // <Box
    //   width="100%"
    //   height="90vh"
    //   position="relative"
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   flexDirection="column" 
    // >
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     style={{
    //       width: '100%',
    //       height: '100%',
    //       zIndex: '-1'
    //     }}
    //   >
    //     <source src="/banner_background.mp4" type="video/mp4" />
    //   </video>
    //   <Box
    //     position="absolute"
    //     top={0}
    //     left={0}
    //     backgroundColor="black"
    //     height="100%"
    //     width="100%"
    //     color="white"
    //     display="flex"
    //     alignItems="center"
    //     justifyContent="center"
    //     fontSize="100px"
    //     fontWeight="1000"
    //     mixBlendMode="multiply"
    //     textColor={'white'}
    //     zIndex='100'
    //   >
    //     <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //       <span style={{ textAlign: 'center', fontFamily:'cursive', backgroundColor:'transparent' }}> <span style={{fontSize: "175px"}}>C</span>OMPUTER <span style={{fontSize: "175px"}}>S</span>CIENCE</span>
    //       <span style={{ textAlign: 'center', fontFamily:'cursive'  }}><span style={{fontSize: "175px"}}>S</span>OCIETY</span>
    //     </h1>
    //   </Box>
    // </Box>

<>
  <div style={{
      backgroundImage: 'url("/banner_bk.gif")',
      position: "relative",
      height: "65vh",
      width: "100%",
  }}>
    <div style={{
        backgroundColor: "white",
        color: "black",
        fontSize: "7vw", 
        fontWeight: "bold",
        margin: "0 auto",
        padding: "10px",
        width: "100%",
        height: "100%",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "screen",
    }}>
          <span style={{ textAlign: 'center', fontFamily:'cursive', backgroundColor:'transparent' }}> <span style={{fontSize: "175px"}}>C</span>OMPUTER <span style={{fontSize: "175px"}}>S</span>CIENCE </span>
          <span style={{ textAlign: 'center', fontFamily:'cursive'  }}><span style={{fontSize: "175px"}}>S</span>OCIETY</span>      </div>
  </div>
</>

/* <Box> 
  {/* <Image src='/banner.jpg'/> 
</Box>  */


  );
}