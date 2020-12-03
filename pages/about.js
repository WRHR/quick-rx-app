import {
  Box,
  Button,
  useDisclosure,
  Slide,
  Heading,
  Text,
} from "@chakra-ui/react";

function About() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>About</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Heading size="lg">About Quick-RX</Heading>
          <Text fontSize="lg" pt="10px">
            This application allow quick perscription adcive based on patient
            characteristics and medical history.
          </Text>
        </Box>
      </Slide>
    </>
  );
}

export default About;
