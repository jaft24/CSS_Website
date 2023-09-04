import Head from 'next/head'
import Events from '../../components/Events/Events'
import { VStack } from '@chakra-ui/react'
import SignUp from '../../components/SignUp/SignUp'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import DropDown from '../../components/DropDown/DropDown'

export default function Home() {
  return (
    <>
      <Head>
        <title>Computer Science Society</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <VStack gap={10} margin={'auto'} padding={10}>
      <HomeBanner />  
      <Events />
      <DropDown />
      <SignUp />
      </VStack>
    </>
  )
}
