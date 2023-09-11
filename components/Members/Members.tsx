import React, { useState } from "react";

import Stack from "@mui/material/Stack";

import data from "../../data/Data";

import {Box,AccordionButton,Button, Image, HStack} from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PageDivider from "../Utility/PageDivider";

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

        <section className="py-4 container">

          <div className="d-flex flex-wrap justify-content-center align-items-center">

            {slice.map((item, index) => {

              const isFirstMember = index % 2 === 0;

   

            return (

                <>

                <PageDivider title="Meet the Team"/>

                <div style={{padding: "30px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", justifyContent: "center"}}>

                    <Stack key={index} gap="2.5%" flexDirection={{ base: "column", md: isFirstMember ? "row" : "row-reverse" }}  paddingX="30px" paddingY="6px" margin="auto" maxWidth="100%" >

                        <Image src={item.img} alt={item.name} boxSize="20%" maxW="100%" minW="200px" style={{padding: "15px", border: "0px solid #ddd", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", background: "linear-gradient(115deg, white 22%, #A24857 23%, white 70% )", marginBottom:"10px" }}/>

                            <Box gap="20px" flex="60%" paddingRight="5%" marginTop={"10px"}>

                                <h5 className="card-title" style={{ fontSize: "1.25rem", fontFamily: "monospace", fontWeight: "bold"}}>{item.title}</h5>

                                    <h6 className="card-title" style={{ fontFamily: "Lucida Console" }}>{item.name}</h6>

                                    <div style={{display: "flex", gap:"10px"}}><FontAwesomeIcon icon={faInstagram}/> <FontAwesomeIcon icon={faLinkedin}/> <FontAwesomeIcon icon={faGithub}/></div>

                                    <p className="flex card-text" style={{ textAlign: "justify", marginTop:"5px", color:"gray" }}>{item.desc}</p></Box>

                    </Stack>

 

                </div>

                {index !== slice.length - 1 && <hr style={{marginLeft:"20%", marginRight:"20%", backgroundColor:"maroon", color:"maroon"}} />}

                </>

              );

            })}

          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px",}}>

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

          </div>

        </section>

      );

    };

   

    export default Members;