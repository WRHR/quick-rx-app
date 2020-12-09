import { Box, Text } from "@chakra-ui/react";
import Sidebar3 from "./Sidebar3";
import MediterraneanDiet from './MediterraneanDiet'

export default function SeeSidebar3() {
  return (
    <Box pt="10px">
      <Text>Recommend moderate dose of statin therapy (see Sidebar 3)</Text>
      <MediterraneanDiet />
    </Box>
  );
}
