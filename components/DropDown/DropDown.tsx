"use client"

import {  
  Box, 
  Flex,
  Image,  
  Button, 
  Text, 
  Popover,
  Divider,
  Tabs, TabList, TabPanels, Tab, TabPanel, PopoverTrigger, PopoverContent, SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import QandAData from './TabDatas/QandAData.json';
import Data from './TabDatas/LeetCode.json';
import { FaCode } from 'react-icons/fa';
import { useRef } from 'react';
import PageDivider from '../Utility/PageDivider';



const TabsInDropDown = () => {
  // Access the Q&A data from Accordions
  const qaData = QandAData["Q&A about Computer Science Club"];
  const leetCodeData = Data.LeetCode;



  const firstTextElement = useRef<HTMLDivElement>(null);
  const secondTextElement = useRef<HTMLDivElement>(null);
  const thirdTextElement = useRef<HTMLDivElement>(null);
  const fourthTextElement = useRef<HTMLDivElement>(null);
  const fiveTextElement = useRef<HTMLDivElement>(null);
  const sixTextElement = useRef<HTMLDivElement>(null);


  const handleEnter = () => {
    if (firstTextElement.current) {
      firstTextElement.current.textContent = " ";
    }
    if (secondTextElement.current) {
      secondTextElement.current.style.cssText = "opacity: 1";
    }
  };

  const handleLeave = () => {
    if (firstTextElement.current) {
      firstTextElement.current.textContent = "Career Path Through    Computer Science";
    }
    if (secondTextElement.current) {
      secondTextElement.current.style.cssText = "opacity: 0"
    }
  };

  const handleInternEnter = () => {
    if (thirdTextElement.current) {
      thirdTextElement.current.textContent = " ";
    }
    if (fourthTextElement.current) {
      fourthTextElement.current.style.cssText = "opacity: 1";
    }
  };

  const handleInternLeave = () => {
    if (thirdTextElement.current) {
      thirdTextElement.current.textContent = "Internships";
    }
    if (fourthTextElement.current) {
      fourthTextElement.current.style.cssText = "opacity: 0"
    }
  };


  const handleNetworkEnter= () => {
    if (fiveTextElement.current) {
      fiveTextElement.current.textContent = " ";
    }
    if (sixTextElement.current) {
      sixTextElement.current.style.cssText = "opacity: 1";
    }
  };

  const handleNetworkLeave = () => {
    if (fiveTextElement.current) {
      fiveTextElement.current.textContent = "Networking";
    }
    if (sixTextElement.current) {
      sixTextElement.current.style.cssText = "opacity: 0"
    }
  };
  

  return (
    <>
           <PageDivider title="Resources"/> 

    <Tabs id="resources" defaultIndex={4}>
      <TabList fontWeight={"bold"} display={"flex"} justifyContent={'space-evenly'} fontSize={"large"}>
        <Tab>Interview Q & A</Tab>
        <Tab>Career Center</Tab>
        <Tab>LeetCode</Tab>
      </TabList>
      
      <TabPanels>

      {/* Tab #1 */}
      <TabPanel>
           <Box p={4} display={{ md: "flex" }}>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Box mt={2} color="gray.500">
                
                {qaData.map((item, index) => (
                  <Box key={index} fontWeight={"bold"} color="black">
                    <Box fontWeight={"bold"} fontSize={"large"} alignItems="center" color="#540032" >Q: {item.Question}</Box>
                    <br />
                    A: {item.Answer}
                    <br />
                    <br />
                  </Box>
                ))}
              </Box>
              <Button
                loadingText="Loading..."
                mt="10"
                border="solid 1px maroon"
                width={"30%"}
                height={"40px"}
                fontFamily={"inherit"}
                borderRadius={"10px"}
                fontSize={'sm'}
                fontWeight={600}
                color={'maroon'}
                bg={'transparent'}
                _hover={{
                  bg: 'maroon',
                  color: 'white'
                }}
                alignSelf={"center"}
              >
                Load More
              </Button>
            </Box>
          </Box> 
        </TabPanel>
        <TabPanel>
          <SimpleGrid
            columns={[1, 2, 3]} 
            spacing={4}
            maxW='1200px'
            mx='auto'
          >
            
            {/* Tab #2 */}
            {/* Card #1  */}
            <Card cursor='pointer' position='relative' display='flex' alignItems='center' justifyContent='center'>
            <Image
                objectFit='cover'
                width='100%'
                height='500px'
                src="https://bit.ly/2jYM25F"
                alt='Caffe Latte'
              />
              <Box
                position='absolute'
                top='0'
                left='0'
                width='100%'
                height='100%'
                backgroundColor='rgba(0, 0, 0, 0.7)' 
              >
                <Text
                  ref={firstTextElement}
                  position='absolute'
                  top='55%'
                  left='50%'
                  w="375px" 
                  h="225px" 
                  transform='translate(-50%, -50%)'
                  color="white"
                  fontFamily="AvenirNext"
                  fontSize="4xl"
                  p="9"
                >
                  Career Path Through &nbsp;&nbsp;Computer Science
                </Text>
                <Popover>
                  <PopoverTrigger>
                    <a href="https://www.concordiacollege.edu/academics/career-center/staff/" target="_blank" rel="noopener noreferrer">
                      <Box 
                        ref={secondTextElement}
                        w="355px" 
                        h="415px" 
                        bg="black" 
                        opacity="0" 
                        transition="opacity 0.3s ease-in-out"
                        cursor='pointer'
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        position='absolute'
                        top='10%'
                        left='5%'
                      >
                        <Text 
                          color="#ffb3d1"
                          fontFamily="AvenirNext"
                          fontSize="4xl"
                          pt='8'
                          pb='8'
                          pl='5'
                          pr='8'
                        >
                          Career Path Through &nbsp;&nbsp;Computer Science
                          {/* <Divider mt="2" ml="10" mr="10" alignItems="center" borderColor="white" width="61"/> */}
                        </Text>
                        
                        <Text
                          color="white"
                          fontFamily="AvenirNext"
                          fontSize="large"
                          p="9"
                        >
                          With so many options, it is normal to feel uncertain about your computer science career path, and Career Center is happy to help.
                        </Text>
                      </Box>
                    </a>
                  </PopoverTrigger>
                </Popover>  
              </Box>
            </Card>





            {/* Card #2  */}
            <Card cursor='pointer' position='relative' display='flex' alignItems='center' justifyContent='center'>
              <Image
                objectFit='cover'
                width='100%'
                height='500px'
                src="https://bit.ly/2jYM25F"
                alt='Caffe Latte'
              />
              <Box
                position='absolute'
                top='0'
                left='0'
                width='100%'
                height='100%'
                backgroundColor='rgba(0, 0, 0, 0.7)' 
              >
                <Text
                  ref={thirdTextElement}
                  color="white"
                  fontFamily="AvenirNext"
                  fontSize="4xl"
                  position="absolute"
                  alignItems="center"
                  pl="20"
                  top='40%'
                  left='7%'
                >
                  Internships
                </Text>
                <Popover>
                  <PopoverTrigger>
                    <a href="https://www.concordiacollege.edu/academics/career-center/staff/" target="_blank" rel="noopener noreferrer">
                      <Box 
                        ref={fourthTextElement}
                        w="355px" 
                        h="415px" 
                        bg="black" 
                        opacity="0" 
                        transition="opacity 0.3s ease-in-out"
                        cursor='pointer'
                        onMouseEnter={handleInternEnter}
                        onMouseLeave={handleInternLeave}
                        position='absolute'
                        top='5%'
                        left='5%'
                        
                      >
                        <Text 
                          color="#ffb3d1"
                          fontFamily="AvenirNext"
                          fontSize="4xl"
                          position="absolute"
                          alignItems="center"
                          pl="20"
                          top='30%'
                          left='7%'
                        >
                          Internships
                          {/* <Divider mt="2" ml="6" mr="12" alignItems="center" borderColor="white" width="35"/> */}
                        </Text>
                        
                        <Text
                          color="white"
                          position="absolute"
                          fontFamily="AvenirNext"
                          fontSize="large"
                          top='50%'
                          left='10%'
                        >
                           Opportunities through the CSSE provide students with hands-on experience, valuable networking connections, and skill development.
                        </Text>
                      </Box>
                    </a>
                  </PopoverTrigger>
                </Popover>  
              </Box>
            </Card>



            {/* Card #3  */}
            <Card cursor='pointer' position='relative' display='flex' alignItems='center' justifyContent='center'>
              <Image
                objectFit='cover'
                width='100%'
                height='500px'
                src="https://bit.ly/2jYM25F"
                alt='Caffe Latte'
              />
              <Box
                position='absolute'
                top='0'
                left='0'
                width='100%'
                height='100%'
                backgroundColor='rgba(0, 0, 0, 0.7)' 
              >
                <Text
                  ref={fiveTextElement}
                  color="white"
                  fontFamily="AvenirNext"
                  fontSize="4xl"
                  position="absolute"
                  alignItems="center"
                  pl="20"
                  top='40%'
                  left='7%'
                >
                  Networking
                </Text>
                <Popover>
                  <PopoverTrigger>
                    <a href="https://www.concordiacollege.edu/academics/career-center/staff/" target="_blank" rel="noopener noreferrer">
                      <Box 
                        ref={sixTextElement}
                        w="355px" 
                        h="415px" 
                        bg="black" 
                        opacity="0" 
                        transition="opacity 0.3s ease-in-out"
                        cursor='pointer'
                        onMouseEnter={handleNetworkEnter}
                        onMouseLeave={handleNetworkLeave}
                        position='absolute'
                        top='10%'
                        left='5%'
                        
                      >
                        <Text 
                          color="#ffb3d1"
                          fontFamily="AvenirNext"
                          fontSize="4xl"
                          position="absolute"
                          alignItems="center"
                          pl="20"
                          top='25%'
                          left='7%'
                        >
                          Networking
                          {/* <Divider mt="2" ml="6" mr="12" alignItems="center" borderColor="white" width="35"/> */}
                        </Text>
                        
                        <Text
                          color="white"
                          position="absolute"
                          fontFamily="AvenirNext"
                          fontSize="large"
                          top='50%'
                          left='10%'
                        >
                          Through the CSSE offers students a chance to connect with industry professionals, peers, and mentors.
                        </Text>
                      </Box>
                    </a>
                  </PopoverTrigger>
                </Popover>  
              </Box>
            </Card>
            </SimpleGrid>
            </TabPanel>


          {/* Tab #3 */}      
          <TabPanel> 

          {leetCodeData.map((item, index) => (
            <Box key={index}>
              <Text fontWeight={"bold"} fontSize={"large"} alignItems="center" color="#540032">
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  {item.title}
                </a>
                <br/>
              </Text>
              <Text mb="3" mr="4" fontWeight={"bold"} color="black">
              <li>{item.description}</li>
              </Text>
            </Box>
          ))}

        </TabPanel>
      </TabPanels>
    </Tabs>
    </>
  );
}

export default TabsInDropDown;