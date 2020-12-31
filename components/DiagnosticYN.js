import { FormLabel, RadioGroup, HStack, Radio, Box } from "@chakra-ui/react";
import resetYN from "../utils/resetYN";

function handlChange(e, setState, setters) {
  setState(e);
  resetYN(setters);
}

export default function DiagnosticYN({ state, setState, setters, question }) {
  return (
    <Box>
      <FormLabel>{question}</FormLabel>
      <RadioGroup
        onChange={(e) => handlChange(e, setState, setters)}
        value={state}
      >
        <HStack>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </HStack>
      </RadioGroup>
    </Box>
  );
}
