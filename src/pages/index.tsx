'use client'

import Head from 'next/head'
import Events from '../../components/Events/Events'
import { Stack, VStack } from '@chakra-ui/react'
import SignUp from '../../components/SignUp/SignUp'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import DropDown from '../../components/DropDown/DropDown'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import TabsInDropDown from '../../components/DropDown/DropDown'

export default function Home() {
  return (
    <>
      <Head>
        <title>Computer Science Society</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeBanner /> 
      <Stack gap={10} padding={10} alignItems={"center"}> 
      <Events />
      </Stack>
      <SocialMedia />
      <TabsInDropDown />
      <SignUp />
    </>
  )
}


 