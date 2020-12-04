import { useState } from "react";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";

export default function Dyslipidemia() {
  const [validAge, setValidAge] = useState(null);
  return (
    <Box>
      <PageHeader diesease="Dyslipidemia" />
      <Heading size="md">
        VA/DoD Clinical practice guideline for managing Dyslipidemia to reduce
        CVD risk
      </Heading>
      <FormControl>
        <FormLabel>Is the patient older than 40?</FormLabel>
        <RadioGroup onChange={setValidAge} value={validAge}>
          <HStack>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </HStack>
        </RadioGroup>
        {validAge === "yes" ? (
          <Box>
            <FormLabel>Does the patient have EF less than 35%, ESKD, or a life expectancy less than 5 years?</FormLabel>
          </Box>
        ) : (
          <Text>Discuss other treatment options with patient</Text>
        )}
      </FormControl>
    </Box>
  );
}
