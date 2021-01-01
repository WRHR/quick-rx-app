import { Box, Heading, Text } from "@chakra-ui/react";
import FollowUp from './FollowUp'

export default function ExerciseRec() {
  return (
    <Box>
      <Heading size='md' pb='5px'>Exercise Reccomendation</Heading>
      <Text>
        Recommend regular aerobic exercise and smoking cessation(if applicable)
      </Text>
      <FollowUp />
    </Box>
  );
}
