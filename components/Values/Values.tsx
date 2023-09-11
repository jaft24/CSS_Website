import React, { useState } from "react";

import Stack from "@mui/material/Stack";

import data from "../../data/Data";

import {Box,AccordionButton,Button, Image, HStack} from '@chakra-ui/react'
import PageDivider from "../Utility/PageDivider";

const Values = () => {

    return(

        <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ padding: "20px" }}>

            {data.missionValueData.map((item, index) => {

                const  mission = index % 2 === 0;

                return(

                    <>
                    <PageDivider title="Mission and Values"/>

                    <div style={{padding: "30px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", justifyContent: "center"}}>

                        <Stack key={index} gap="2.5%" flexDirection={{ base: "column", md: mission ? "row" : "row-reverse" }}  paddingX="30px" paddingY="6px" margin="auto" maxWidth="100%" alignItems="center">

                            <h5 className="card-title" style={{ fontSize: "1.25rem", fontFamily: "monospace", fontWeight: "bold"}}>{item.title}</h5>

                                <Box gap="10px" flex="60%" paddingRight="5%" marginTop={"10px"} textAlign={'justify'}>

                                    <q className="flex card-text" style={{ textAlign: "justify",color:"grey", lineHeight: "0px", wordSpacing: "5px" }}>{item.desc}</q>

                                </Box>

                        </Stack>

                    </div>

                    {index !== data.missionValueData.length - 1 && <hr style={{marginLeft:"20%", marginRight:"20%", backgroundColor:"maroon", color:"maroon"}} />}

                    </>

                )

 

            })}

        </div>

    );

}

 

export default Values;