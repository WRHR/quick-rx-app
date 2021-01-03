import {Box, Flex, Heading, Link} from '@chakra-ui/react'
import About from './about'
export default function NavBar(){
  return (
    <Flex justifyContent='space-between' p='20px' w='100%'>
      <Heading>Quick-RX</Heading>
      <Box>
        <Link size='small' href='/'>Home</Link>
        <About />
      </Box>
    </Flex>
  )
}