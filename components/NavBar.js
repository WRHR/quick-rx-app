import {Box, Flex, Heading, Link} from '@chakra-ui/react'
import About from './about'
export default function NavBar(){
  return (
    <Flex justifyContent='space-around'>
      <Heading>Quick-RX</Heading>
      <Box>
        <Link href='/'>Home</Link>
        <About />
      </Box>
    </Flex>
  )
}