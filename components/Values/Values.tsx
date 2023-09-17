import React, { useState } from "react";
import data from "../../data/Data";
import {Box, Divider, Stack, AccordionButton,Button, Image, HStack} from '@chakra-ui/react';
import PageDivider from '../Utility/PageDivider';
const Values = () => {
    return(
        <>
        <PageDivider title="Mission and Values"/>
        <Box className="d-flex flex-wrap justify-content-center align-items-center" style={{ padding: "20px" }}>
            {data.missionValueData.map((item, index) => {
                const  mission = index % 2 === 0;
                return(
                    <>
                    <Box style={{padding: "30px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", justifyContent: "center"}}>
                        <Stack key={index} gap="2.5%" flexDirection={{ base: "column", md: mission ? "row" : "row-reverse" }}  paddingX="30px" paddingY="6px" margin="auto" maxWidth="100%" alignItems="center">
                            <h5 className="card-title" style={{ fontSize: "1.25rem", fontFamily: "monospace", fontWeight: "bold"}}>{item.title}</h5>
                                <Box gap="10px" flex="60%" paddingRight="5%" marginTop={"10px"} textAlign={'justify'}>
                                    <q className="flex card-text" style={{ textAlign: "justify",color:"grey", lineHeight: "0px", wordSpacing: "5px" }}>{item.desc}</q>
                                </Box>
                        </Stack>
                    </Box>
                    <Box width={"60%"} marginX={"auto"}>
                    {index !== data.missionValueData.length - 1 && <Divider height={"1px"} marginRight="20%" bg="lightgray" borderColor="gray" width={"100%"} />}
                    </Box>
                    </>
                )
            })}
        </Box>
        </>
    );
}

export default Values;