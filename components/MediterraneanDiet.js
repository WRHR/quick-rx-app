import { Box, Text } from "@chakra-ui/react";
import ExerciseRec from './ExerciseRec'

export default function MediterraneanDiet() {
  return (
    <Box>
      <Text>
        Recommend dietitian-led Mediteranean Diet for risk greater than 12%
      </Text>
      <ExerciseRec />
    </Box>
  );
}
