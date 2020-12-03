import { Box, Button, useDisclosure, Slide } from "@chakra-ui/react";

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
          <h3>About Quick-RX</h3>
          <p>
            This application allow quick perscription adcive based on patient
            characteristics and medical history.
          </p>
        </Box>
      </Slide>
    </>
  );
}

export default About;

