import { FormLabel, RadioGroup, HStack, Radio, Box, } from "@chakra-ui/react";
import resetYN from './resetYN'

export default function DiagnosticYN({ state, setState, states, setStates }) {

  return (
    <Box>
      <RadioGroup onChange={()=> {
        setState(value) 
        resetYN(states, setStates)
        }} value={state}>
        <HStack>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </HStack>
      </RadioGroup>
    </Box>
  );
}
