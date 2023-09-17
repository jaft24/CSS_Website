import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
     <ChakraProvider>
       <NavBar />
       <Component {...pageProps} />
       <Footer />
      </ChakraProvider>
  )
}
