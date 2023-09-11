import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Box, Image, Text } from '@chakra-ui/react';

export default function HomeBanner() {
  const [text, count] = useTypewriter({
    words: [
      "COMPUTER"
    ],
    loop: true,
    delaySpeed: 3000,
  });

  const [text2, count2] = useTypewriter({
    words: [
      "SCIENCE"
    ],
    loop: true,
    delaySpeed: 3000,
  });

  const [text3, count3] = useTypewriter({
    words: [
      "SOCIETY"
    ],
    loop: true,
    delaySpeed: 3000,
  });


  return (
    <Box
      height="100vh"
      width="100%"
      position="relative" 
    >
      <Image
        height="100%"
        width="100%"
        src="https://www.dropbox.com/scl/fi/sr0yyupr3sbvpup48hht2/image_2023-09-09_000115671.png?rlkey=7v232aoorl4lgbsxylg74z91r&dl=1"
        alt="Caffe Latte"
      />
      <Text
        position="absolute" 
        fontFamily="monospace"
        fontSize="180px"
        color="white"
        top="0%" 
        left="40%" 
        transform="translateX(-50%)" 
        padding="10px 20px" 
        borderRadius="5px" 
      >
        <span>{text}</span>
      </Text>
      <Text
        position="absolute" 
        fontFamily="monospace"
        fontSize="180px"
        color="white"
        top="20%" 
        left="65%" 
        transform="translateX(-50%)" 
        padding="10px 20px" 
        borderRadius="5px" 
      >
        <span>{text2}</span>
      </Text>
      <Text
        position="absolute" 
        fontFamily="monospace"
        fontSize="180px"
        color="white"
        top="40%" 
        left="60%" 
        transform="translateX(-50%)" 
        padding="10px 20px" 
        borderRadius="5px" 
      >
        <span>{text3}</span>
        <Cursor cursorColor="#F7AB0A" />
      </Text>
    </Box>
  );
}