import { FormLabel, RadioGroup, HStack, Radio, Box } from "@chakra-ui/react";

export default function DiagnosticYN({ state, setState }) {
  return (
    <Box>
      <RadioGroup onChange={setState} value={state}>
        <HStack>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </HStack>
      </RadioGroup>
    </Box>
  );
}
