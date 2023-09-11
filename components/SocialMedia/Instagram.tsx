import Data from '../../data/Data';
import React, { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { SimpleGrid, Button } from '@chakra-ui/react'
import PageDivider from '../Utility/PageDivider';

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

 <div style={{  display: "flex", padding: "10px", flexWrap: 'wrap' , margin: "auto", alignItems: "center", justifyContent: "center", overflow:"none"}}>
            <SimpleGrid key={slice.length}  display="flex" alignItems="center" justifyContent={"center"} flexWrap="wrap" margin = "auto" columns = {3} spacing = {20} minChildWidth={370}>
            {slice.map((item: { url: string; width: number }, index: number): JSX.Element => {
                return (
                   <div style={{ width:"320px", height:"360px", overflow:"hidden", alignItems:'center', justifyContent: 'center'}}>
                   <InstagramEmbed
                     url={item.url}
                     width="320px"
                   />
                 </div>);
            })}
            </SimpleGrid>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "10px" }}>
            <Button
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
            </div>
            </>
    )
}
export default Instagram