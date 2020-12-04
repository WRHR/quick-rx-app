import { useState } from "react";
import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";

export default function Dyslipidemia() {
  const [age, setAge] = useState(null);
  return (
    <Box>
      <PageHeader diesease="Dyslipidemia" />
      <Heading size="md">
        VA/DoD Clinical practice guideline for managing Dyslipidemia to reduce
        CVD risk
      </Heading>
      <FormControl>
        <FormLabel>Patient Age:</FormLabel>
        <Input placeholder="Enter patient's age:" type="number" value={age}/>
      </FormControl>
    </Box>
  );
}
