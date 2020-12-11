import { useState } from "react";
import {
  Text,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Flex,
} from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import DiagnosticYN from "../components/DiagnosticYN";
import SeeSidebar3 from "../components/SeeSidebar3";
import MediterraneanDiet from "../components/MediterraneanDiet";
import ExerciseRec from "../components/ExerciseRec";
import SideBars from "../components/SideBars";

export default function Dyslipidemia() {
  const [validAge, setValidAge] = useState(null);
  const [lifeExp, setLifeExp] = useState(null);
  const [patientCVD, setPatientCVD] = useState(null);
  const [patientCVDSideBar, setPatientCVDSideBar] = useState(null);
  const [patientCVDRisk, setPatientCVDRisk] = useState(null);
  const [patientStatinPref, setPatientStatinPref] = useState(null);

  return (
    <Box p="20px" pr="20px">
      <PageHeader diesease="Dyslipidemia" />
      <Heading size="md" p="10px">
        VA/DoD Clinical practice guideline for managing Dyslipidemia to reduce
        CVD risk
      </Heading>
      <Flex>
        <Box w="50%">
          <FormControl pt="10px" m="0 20px" display="flex" flexDir="column">
            <FormLabel>Is the patient older than 40?</FormLabel>
            <DiagnosticYN setState={setValidAge} state={validAge} />
            {validAge === "yes" && (
              <Box pt="10px">
                <FormLabel>
                  Does the patient have EF less than 35%, ESKD, or a life
                  expectancy less than 5 years?
                </FormLabel>
                <DiagnosticYN setState={setLifeExp} state={lifeExp} />
              </Box>
            )}
            {validAge === "no" && (
              <Text>Discuss other treatment options with patient</Text>
            )}
            {lifeExp === "yes" && (
              <Text>
                Discuss lack of evidence demonstrating benefit and continue
                ongoing care
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
                  Consider PCSK9 inhibitor only after maximizing statin therapy
                  and adding eetimibe
                </Text>
                <Text>
                  If MI,ACS, or CABG/PCI in the past 6 weeks, refer for cardiac
                  rehab <Button>?</Button>
                </Text>
                <MediterraneanDiet />
              </Box>
            )}
            {patientCVD === "no" && (
              <Box pt="10px">
                <FormLabel>
                  Does the patient have CVD per Sidebar 1, DM, or LDL-C level
                  less than 4.9 mmol/L (190mg/dL)
                </FormLabel>
                <DiagnosticYN
                  setState={setPatientCVDSideBar}
                  state={patientCVDSideBar}
                />
              </Box>
            )}
            {patientCVDSideBar === "yes" && <SeeSidebar3 />}
            {patientCVDSideBar === "no" && (
              <Box pt="10px">
                <FormLabel>
                  Is patient's 10-y CVD risk greater than 12%?
                </FormLabel>
                <DiagnosticYN
                  setState={setPatientCVDRisk}
                  state={patientCVDRisk}
                />
              </Box>
            )}
            {patientCVDRisk === "yes" && <SeeSidebar3 />}
            {patientCVDRisk === "no" && (
              <Box pt="10px">
                <FormLabel>
                  Is the patient's 10-y risk 6% to 12% and does the patient
                  prefer statin treatment?
                </FormLabel>
                <DiagnosticYN
                  setState={setPatientStatinPref}
                  state={patientStatinPref}
                />
              </Box>
            )}
            {patientStatinPref === "yes" && <SeeSidebar3 />}
            {patientStatinPref === "no" && <ExerciseRec />}
          </FormControl>
        </Box>
        <Box w='50%'>
          <SideBars />
        </Box>
      </Flex>
    </Box>
  );
}
