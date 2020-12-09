import { useState } from "react";
import {
  Text,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import DiagnosticYN from "../components/DiagnosticYN";

export default function Dyslipidemia() {
  const [validAge, setValidAge] = useState(null);
  const [lifeExp, setLifeExp] = useState(null);
  const [patientCVD, setPatientCVD] = useState(null);
  const [patientCVDSideBar, setPatientCVDSideBar] = useState(null);
  const [patientCVDRisk, setPatientCVDRisk] = useState(null);
  const [patientStatinPref, setPatientStatinPref] = useState(null);
  return (
    <Box textAlign="center" p="20px">
      <PageHeader diesease="Dyslipidemia" />
      <Heading size="md">
        VA/DoD Clinical practice guideline for managing Dyslipidemia to reduce
        CVD risk
      </Heading>
      <FormControl pt="10px" m="0 20px" display="flex" flexDir="column">
        <FormLabel>Is the patient older than 40?</FormLabel>
        <DiagnosticYN setState={setValidAge} state={validAge} />
        {validAge === "yes" && (
          <Box pt="10px">
            <FormLabel>
              Does the patient have EF less than 35%, ESKD, or a life expectancy
              less than 5 years?
            </FormLabel>
            <DiagnosticYN setState={setLifeExp} state={lifeExp} />
          </Box>
        )}
        {validAge === "no" && (
          <Text>Discuss other treatment options with patient</Text>
        )}
        {lifeExp === "yes" && (
          <Text>
            Discuss lack of evidence demonstrating benefit and continue ongoing
            care
          </Text>
        )}
        {lifeExp === "no" && (
          <Box pt="10px">
            <FormLabel>
              Does the patient have higher-risk CVD?
              <Button>Show CVD and Equivalents</Button>
            </FormLabel>
            <DiagnosticYN setState={setPatientCVD} state={patientCVD} />
          </Box>
        )}
        {patientCVD === "yes" && (
          <Box pt="10px">
            <Text>Recommend stepped intensification</Text>
            <Text>Maximize statin therapy or add ezetimibe</Text>
            <Text>
              Consider PCSK9 inhibitor only after maximizing statin therapy and
              adding eetimibe
            </Text>
          </Box>
        )}
        {patientCVD === "no" && (
          <Box pt="10px">
            <FormLabel>
              Does the patient have CVD per Sidebar 1, DM, or LDL-C level less
              than 4.9 mmol/L (190mg/dL)
            </FormLabel>
            <DiagnosticYN
              setState={setPatientCVDSideBar}
              state={patientCVDSideBar}
            />
          </Box>
        )}
        {patientCVDSideBar === "yes" && (
          <Box pt="10px">
            <Text>Recommend moderate dose of statin therapy</Text>
          </Box>
        )}
        {patientCVDSideBar === "no" && (
          <Box pt="10px">
            <FormLabel>Is patient's 10-y CVD risk greater than 12%?</FormLabel>
            <DiagnosticYN setState={setPatientCVDRisk} state={patientCVDRisk} />
          </Box>
        )}
        {patientCVDRisk === "yes" && (
          <Box pt="10px">
            <Text>
              Recommend moderate dose of statin therapy (see Sidebar 3)
            </Text>
          </Box>
        )}
        {patientCVDRisk === "no" && (
          <Box pt="10px">
            <FormLabel>
              Is the patient's 10-y risk 6% to 12% and does the patient prefer
              statin treatment?
            </FormLabel>
            <DiagnosticYN
              setState={setPatientStatinPref}
              state={patientStatinPref}
            />
          </Box>
        )}
        {patientStatinPref === "yes" && <Box></Box>}
      </FormControl>
    </Box>
  );
}
