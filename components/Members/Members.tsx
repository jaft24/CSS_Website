import React, { useState } from "react";
import data from "../../data/Data";
import {Text, Box,Divider,AccordionButton,Button, Image, Flex} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PageDivider from '../Utility/PageDivider';
const Members = () => {
    const intialMembers = 2;
    const [noOfMembers, setnoOfMembers] = useState<number>(intialMembers);
    const remainingMembers = data.cardData.length-intialMembers
    const loadMore = (): void => {
        noOfMembers == intialMembers?
        setnoOfMembers(noOfMembers + remainingMembers) : setnoOfMembers(intialMembers)
    };
    const slice = data.cardData.slice(0, noOfMembers);
    return (
    <>
    <PageDivider title="Meet the Team"/>
    <Box>
          <Box className="d-flex flex-wrap justify-content-center align-items-center">
            {slice.map((item, index) => {
              const isFirstMember = index % 2 === 0;
            return (
                <>
                <Box style={{padding: "30px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", justifyContent: "center"}}>
                    <Flex key={index} gap="2.5%" direction={{ base: "column", md: isFirstMember ? "row" : "row-reverse" }}  paddingX="30px" paddingY="6px" margin="auto" maxWidth="100%" >
                        <Image src={item.img} alt={item.name} boxSize="20%" maxW="100%" minW="200px" style={{padding: "15px", border: "0px solid #ddd", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", background: "linear-gradient(115deg, white 22%, #A24857 23%, white 70% )", marginBottom:"10px" }}/>
                            <Box gap="20px" flex="60%" paddingRight="5%" marginTop={"10px"}>
                                <Text fontSize="1.25rem" fontFamily="monospace" fontWeight="bold">{item.title}</Text>
                                  <Text fontFamily="Lucida Console">{item.name}</Text>
                                    <Box maxH={'20px'} maxW="70px" style={{display: "flex"}}><FontAwesomeIcon icon={faInstagram} size={'xs'}/> <FontAwesomeIcon icon={faLinkedin} size={'xs'}/> <FontAwesomeIcon icon={faGithub}size={'xs'} /></Box>
                                    <Text textAlign="justify" marginTop="5px" color="gray">{item.desc}</Text>
                            </Box>
                    </Flex>
                </Box>
                <Box width={"60%"} marginX={"auto"}>
                  {index !== slice.length - 1 && <Divider height={"0.5px"} marginRight="20%" bg="lightgray" borderColor="gray" width={"100%"} />}
                </Box>
                </>
              );
            })}
          </Box>
          <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px",}}>
          <Button
              marginBottom={"20px"}
              loadingText="Loading..."
              border="solid 1px maroon"
              width={"50%"}
              height={"40px"}
              fontFamily={"inherit"}
              borderRadius={"10px"}
              fontSize={"sm"}
              fontWeight={600}
              color={"maroon"}
              bg={"transparent"}
              _hover={{
                bg: "maroon",
                color: "white",
              }}
              alignSelf={"center"}
              onClick={() => loadMore()}
            >
              {noOfMembers > intialMembers ? "Show Less" : "Load More"}
            </Button>
          </Box>
        </Box>
        </>
      );
    };
    
    export default Members;