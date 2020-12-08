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
    <Box>
      <PageHeader diesease="Dyslipidemia" />
      <Heading size="md">
        VA/DoD Clinical practice guideline for managing Dyslipidemia to reduce
        CVD risk
      </Heading>
      <FormControl>
        <FormLabel>Is the patient older than 40?</FormLabel>
        <DiagnosticYN setState={setValidAge} state={validAge} />
        {validAge === "yes" && (
          <Box>
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
          <Box>
            <FormLabel>
              Does the patient have higher-risk CVD?{" "}
              <Button>Show CVD and Equivalents</Button>
            </FormLabel>
            <DiagnosticYN setState={setPatientCVD} state={patientCVD} />
          </Box>
        )}
        {patientCVD === "yes" && (
          <Box>
            <Text>Recommend stepped intensification</Text>
            <Text>Maximize statin therapy or add ezetimibe</Text>
            <Text>
              Consider PCSK9 inhibitor only after maximizing statin therapy and
              adding eetimibe
            </Text>
          </Box>
        )}
        {patientCVD === "no" && (
          <Box>
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
          <Box>
            <Text>Recommend moderate dose of statin therapy</Text>
          </Box>
        )}
        {patientCVDSideBar === "no" && (
          <Box>
            <FormLabel>Is patient's 10-y CVD risk greater than 12%?</FormLabel>
            <DiagnosticYN setState={setPatientCVDRisk} state={patientCVDRisk} />
          </Box>
        )}
        {patientCVDRisk === "yes" && (
          <Box>
            <Text>Recommend moderate dose of statin therapy</Text>
          </Box>
        )}
        {patientCVDRisk === "no" && (
          <Box>
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
      </FormControl>
    </Box>
  );
}
