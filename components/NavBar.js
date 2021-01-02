import {Box, Flex, Heading, Link} from '@chakra-ui/react'
import About from './about'
export default function NavBar(){
  return (
    <Flex justifyContent='space-between' p='20px'>
      <Heading>Quick-RX</Heading>
      <Box>
        <Link size='small' href='/'>Home</Link>
        <About />
      </Box>
    </Flex>
  )
}