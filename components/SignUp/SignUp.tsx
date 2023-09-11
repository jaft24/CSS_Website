import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Image,
  Text,
  useColorModeValue,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { url } from 'inspector'
import { Divider } from '@mui/material';
import PageDivider from '../Utility/PageDivider';


export default function SignUp() {

  const form = useRef<HTMLFormElement>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event: { target: { value: any; }; }) => {
    const inputText = event.target.value;
    if (/^[a-zA-Z\s]+$/.test(inputText) || inputText === "") {
      setFirstName(inputText);
    }
  };

  const handleLastNameChange = (event: { target: { value: any; }; }) => {
    const inputText = event.target.value;
    if (/^[a-zA-Z\s]+$/.test(inputText) || inputText === "") {
      setLastName(inputText);
    } 
  };

  const isValidEmail = (email: string) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const handleEmailChange = (event: { target: { value: any; }; }) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      setIsValid(isValidEmail(newEmail));
    }

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (form.current && isValid) {
      emailjs.sendForm('service_ry99q52', 'template_ectjblr', form.current, 'ql1rzLPlbUfMGGmXt')
        .then((result: { text: any; }) => {
           setIsFormSubmitted(true);
        }, (error: { text: any; }) => {
          console.log(error.text);
        });
    } else {
      console.error("Form element is null");
    }

  };

  return (
    <>
    <PageDivider title="Sign Up"/> 
    <Flex
    id="signUp"
    flexWrap={{ base: "wrap", md: "nowrap" }}
    alignItems={{ base: "center", md: "center" }}
    justifyContent={{ base: "center", md: "space-evenly" }}
    width={"100%"}
    p={"10px"}
    gap={"10px"}
    display={"flex"}
    background= "linear-gradient(115deg, white 22%, #540032 23%, white 70% )"
    color={"white"}
  >
    <Box
      w={{ base: "100%", md: "20%" }}
      mb={{ base: "2", md: "0" }}
      alignItems={{ base: "center", md: "center"}}
      justifyContent={{ base: "center", md: "center"}}
    >
          <Image  margin={"auto"} alt="Kernel Login Image" src="https://www.dropbox.com/scl/fi/p5fh7ip78cx4bsc0cxiqa/Kernel_Signup.png?rlkey=zpm572vzh1gs9ta8l6zfwt518&dl=1"/>
    </Box>
    <Box
      w={{ base: "100%", md: "40%" }}
      m={{ base: "2", md: "0" }}
      mb={{ base: "2", md: "0" }}
      alignItems={{ base: "center", md: "flex-start" }}
      maxW={"500px"}
    >
          <Stack  alignItems={{ base: "center", md: ""}} margin={"auto"}>
          <Text mr={{ base: "0px", md: "auto"}}>  Become a Member! </Text> 
          <Text> Sign Up on our form below so you don't miss all the events we have planned this year. </Text> 
          </Stack>
    </Box>
    <Box
      w={{ base: "100%", md: "35%" }}
      m={{ base: "2", md: "0" }}
      mb={{ base: "2", md: "0" }}
      alignItems={{ base: "center", md: "center" }}
      color={"black"}
    >
            <Box
            rounded={'lg'}
            bg={"white"}
            boxShadow={''}
            maxW={"500px"}
            p={8}
            _hover={{
              transform: "scale(1.05)"
            }}
            margin={"auto"}
            >

            <Stack spacing={4}>

              {isFormSubmitted ? 
            
              <Image src='https://www.dropbox.com/scl/fi/hy4josb17fsgpesyfkhob/sent.gif?rlkey=unyrvfx9w0b72f354kdxppzux&dl=1'/> : 

              <form ref={form} onSubmit={sendEmail}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" 
                           name="user_fname"
                           value={firstName}
                           onChange={handleFirstNameChange}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" 
                           name="user_lname" 
                           value={lastName}
                           onChange={handleLastNameChange}/>
                  </FormControl>
                </Box>
              </HStack>


              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                       name="user_email" 
                       value={email}
                       onChange={handleEmailChange}
                       style={{ borderColor: isValid ? 'green' : 'red' }}
                       required
                       />
              </FormControl>


              <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  value="Send"
                  loadingText="Submitting"
                  border="solid 1px maroon"
                  fontSize={'sm'}
                  fontWeight={600}
                  color={'maroon'}
                  bg={'transparent'}
                  _hover={{
                    bg: 'maroon',
                    color: 'white'
                  }}>
                  Sign up
                </Button>
              </Stack>
              </form>
            }
            </Stack>
          </Box>
    </Box>
  </Flex>
  </>
  )
}
