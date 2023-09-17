'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image
} from '@chakra-ui/react'
import { FaAddressBook, FaBatteryQuarter, FaFacebook, FaInstagram, FaLinkedin, FaTeamspeak, FaTwitter, FaYoutube } from 'react-icons/fa'
import { PiMicrosoftTeamsLogoFill } from 'react-icons/pi'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Image
            src="https://www.dropbox.com/scl/fi/a9d71gckzvhpw533txx3g/CSS_logo-removebg-preview.png?rlkey=fqcyhbwq2dbmedbh0ocwfey2i&dl=1"            alt="CSS Logo"
            width={'80px'}
        />  
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>
            Home
          </Box>
          <Box as="a" href={'#events'}>
            Events
          </Box>
          <Box as="a" href={'/about'}>
            About Us
          </Box>
          <Box as="a" href={'#'}>
            Members
          </Box>
          <Box as="a" href={'#resources'}>
            Resources
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Computer Science Society. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/cordcsse/'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'#'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/CordCSSE/'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Ms Teams'} href={'https://teams.microsoft.com/l/team/19%3a7UPnh3f00BNPEjpAlOMYklCTSrSXZYpNdsjUulhfbik1%40thread.tacv2/conversations?groupId=deb3da0b-1f96-438f-8861-88b41f3385d1&tenantId=4881a8fa-b252-4912-b93a-7806c41bbe91'}>
              <PiMicrosoftTeamsLogoFill />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}