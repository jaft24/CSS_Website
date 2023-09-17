import "react-image-gallery/styles/scss/image-gallery.scss";
import { Box, Image, Text } from '@chakra-ui/react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


export default function AboutBanner() {

    const [text, count] = useTypewriter({
      words: [
        "ABOUT"
      ],
      loop: true,
      delaySpeed: 3000,
    });
  
    const [text2, count2] = useTypewriter({
      words: [
        "US"
      ],
      loop: true,
      delaySpeed: 3000,
    });
  
    return (
      <Box
        width="100%"
        position="relative" 
      >
        <Image
          height="50%"
          width="100%"
          src="https://www.dropbox.com/scl/fi/6bhy74baa8rmx7s878qa9/aboutImage.png?rlkey=8gv7z1nfvvksdseff4luoh6vw&dl=1"
          alt="Caffe Latte"
        />
        <Text
          position="absolute" 
          fontFamily="monospace"
          fontSize="130px"
          color="white"
          top="10%" 
          left="60%" 
          transform="translateX(-50%)" 
          padding="10px 20px" 
          borderRadius="5px" 
        >
          <span>{text}</span>
        </Text>
        <Text
          position="absolute" 
          fontFamily="monospace"
          fontSize="130px"
          color="white"
          top="10%" 
          left="85%"  
          transform="translateX(-50%)" 
          padding="10px 20px" 
          borderRadius="5px" 
        >
          <span>{text2}</span>
          <Cursor cursorColor="#F7AB0A" />
        </Text>
      </Box>
    );
  }