import React, { useState } from "react";
import {Flex, Text, Stack, Avatar, Box,AccordionButton,Button, Image, HStack} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PageDivider from '../Utility/PageDivider';
const ContactUs = () =>{
    return(
        <>
        <PageDivider title="Contact Us"/>
        <Stack gap="2.5%" flexDirection={{ base: "column", md: "row" }} paddingX="30px" paddingY="6px" margin="auto" maxWidth="100%" alignItems="center" justifyContent="center">
            <Flex bg="grey.200" justify={{ base: "center", md: "space-around" }} wrap="wrap" gap="2" marginRight={{ base: "0", md: "20%" }} alignItems="center">
                <Box minW="240px" h="250px" mb={{ base: 4, md: 0 }} marginLeft={{ base: "20%", md: "0" }}>
                <Box fontWeight="bold" fontSize="xx-large" color="maroon" style={{ border: '1px solid gold', borderRadius: '8px', display: 'flex', alignItems: 'center' }}> Computer Science Society </Box>
                    <Text className="card-title" style={{ fontSize: "1.25rem", fontFamily: "Lucida Console", marginTop:"10px" }}>CSSE@cord.edu</Text>
                        <Box maxH={'20px'} maxW="70px" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" /> <FontAwesomeIcon icon={faLinkedin} size="2x" /> <FontAwesomeIcon icon={faGithub} size="2x" />
                        </Box>
                </Box>
            </Flex>
        </Stack>
        </>
    )
}
export default ContactUs;