'use Client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import "react-image-gallery/styles/scss/image-gallery.scss";
import DropDown from '../../components/DropDown/DropDown';
import { Stack, Text } from '@chakra-ui/react';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Members from '../../components/Members/Members';
import Values from '../../components/Values/Values';
import ContactUs from '../../components/ContactUs/ContactUs';


export default function About() {

  return (
    <>
      <Head>
        <title>Computer Science Society</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AboutBanner />
      <Members />
      <Values />
      <ContactUs />

      
    </>
  )
}
