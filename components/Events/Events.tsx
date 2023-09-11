'use client'

import { Box } from "@chakra-ui/react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import images from "../../data/events";
import PageDivider from "../Utility/PageDivider";


export default function Events() {


  return (
    <Box  id="events" width={'90%'} overflow={'hidden'}>
      <PageDivider title="Events"/>  
      <ImageGallery items={images} />
    </Box>
  )
}