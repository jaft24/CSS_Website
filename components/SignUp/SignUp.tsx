import { useMediaQuery, Button, FormControl, FormLabel, HStack, Input, Text, VStack, Image, Flex } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons'



const SignUp = () => {


return(
  <HStack
    bg={"white"}
    color="black"
    width={"100%"}
    padding={"2% 1%"}
    fontFamily={"monospace"}
    gap={"5%"}
  >  
    <Image alt="Kernel Login Image" src="/Kernel_Sign_Up_Img.png"/>

    <Flex ml="-5%" width="30%" flexDirection={"column"} justifyContent={"flex-start"}>
    <Text  fontWeight={"bold"} fontSize={"xx-large"} color={"maroon"}> Become a Member! </Text> 
    <Text  fontWeight={"bold"} fontSize={"medium"} color={"maroon"}> 
    Sign Up on our form below so you don't miss all the events we have planned this year. 
    </Text> 
    </Flex>

    <HStack spacing={100} justifyContent={"center"} alignItems={"flex-end"} wrap={"wrap"}>
      <FormControl id="password">
        <FormLabel ml={"7px"}> Full Name</FormLabel>
        <Input type="text" border={"1px solid maroon"} borderRadius={"10px"} paddingLeft={"10px"}/>
      </FormControl>

      <FormControl id="email">
        <FormLabel  ml={"7px"}> Concordia Email</FormLabel>
        <Input type="email" border={"1px solid maroon"} borderRadius={"10px"} paddingLeft={"10px"}/>
      </FormControl>

      <Button
        leftIcon={<EmailIcon />} 
        backgroundColor={"transparent"}
        fontWeight={"bold"}
        padding={"5px"}
        paddingX={"15px"}
        border={"solid 1px maroon"}
        borderRadius={"10px"}
        _hover={{
          bg: "maroon",
          color: "gold"
        }}
      >
        SIGN UP  
      </Button>
    </HStack>
  </HStack>
);
      }

export default SignUp;
