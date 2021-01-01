import { Box, Heading, Text } from "@chakra-ui/react";
import ExerciseRec from './dyslipidemia/ExerciseRec'

export default function MediterraneanDiet() {
  return (
    <Box>
      <Heading size='md' pb='5px'>Mediterranean Diet</Heading>
      <Text>
        Recommend dietitian-led Mediteranean Diet for risk greater than 12%
      </Text>
      <ExerciseRec />
    </Box>
  );
}
