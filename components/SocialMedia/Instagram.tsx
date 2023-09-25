import Data from '../../data/Data';
import React, { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import {Box, Divider, SimpleGrid, Button } from '@chakra-ui/react'
import PageDivider from '../Utility/PageDivider';
import dynamic from "next/dynamic";
const DynamicInstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((module) => module.InstagramEmbed),
  { ssr: false } // Disable server-side rendering
);
const Instagram = () => {
    const intialPosts = 3;
    const [noOfposts, setnoOfPosts] = useState<number>(intialPosts);
    const remainingPosts = Data.instagramData.length - intialPosts
    const loadMore = (): void => {
        noOfposts == intialPosts?
        setnoOfPosts(noOfposts + noOfposts) : setnoOfPosts(intialPosts)
    };
    const slice = Data.instagramData.slice(0, noOfposts);
    return (
        <>
        <PageDivider title="Instagram Posts"/>
        <Box style={{  display: "flex", padding: "10px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", justifyContent: "center", overflow:"none", marginTop:"20px"}}>
            <SimpleGrid display="flex" alignItems="center" justifyContent={"center"} flexWrap="wrap" margin = "auto" columns = {3} spacing = {20} minChildWidth={370}>
            {slice.map((item: { url: string; width: number }, index: number): JSX.Element => {
                return (
                   <Box key={index} style={{ width:"320px", height:"360px", overflow:"hidden", alignItems:'center', justifyContent: 'center'}}>
                   <DynamicInstagramEmbed
                     url={item.url}
                     width="320px"
                   />
                 </Box>);
            })}
            </SimpleGrid>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "10px" }}>
            <Button
                marginTop={"30px"}
                marginBottom={"20px"}
                loadingText="Loading..."
                border="solid 1px maroon"
                width={"50%"}
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
                onClick={() => loadMore()}>{noOfposts >intialPosts ? "Show less" : "Load more"}
            </Button>
            </Box>
            </>
    )
}
export default Instagram