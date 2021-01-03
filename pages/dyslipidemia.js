import { useState } from "react";
import {
  Text,
  Box,
  FormControl,
  Heading,
  Flex,
  SlideFade,
} from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import DiagnosticYN from "../components/DiagnosticYN";
import SeeSidebar3 from "../components/dyslipidemia/SeeSidebar3";
import MediterraneanDiet from "../components/MediterraneanDiet";
import ExerciseRec from "../components/dyslipidemia/ExerciseRec";
import SideBars from "../components/dyslipidemia/SideBars";
import RevisedFollowUp from '../components/dyslipidemia/RevisedFollowUp'

export default function Dyslipidemia() {
  const [validAge, setValidAge] = useState(null);
  const [lifeExp, setLifeExp] = useState(null);
  const [patientCVD, setPatientCVD] = useState(null);
  const [patientCVDSideBar, setPatientCVDSideBar] = useState(null);
  const [patientCVDRisk, setPatientCVDRisk] = useState(null);
  const [patientStatinPref, setPatientStatinPref] = useState(null);

  const setters = [
    setValidAge,
    setLifeExp,
    setPatientCVD,
    setPatientCVDSideBar,
    setPatientCVDRisk,
    setPatientStatinPref,
  ];
  const questions = [
    "Is the patient older than 40?",
    "Does the patient have EF < 35%, ESKD, or a life expectancy < 5 years?",
    "Does the patient have higher-risk CVD? (see Sidebar 1)",
    "Does the patient have CVD per Sidebar 1, DM, or LDL-C level < 4.9 mmol/L (190mg/dL)",
    "Is patient's 10-y CVD risk > 10%?",
    "Is the patient's 10-y risk 7.5% to 10% and does the patient prefer statin treatment?",
  ];

  return (
    <Box p="20px" pr="20px">
      <PageHeader diesease="Dyslipidemia" />
      <Heading size="md" p="10px">
        Treatment of Elevated LDL-C
      </Heading>
      <Flex>
        <Box w="50%">
          <FormControl pt="10px" m="0 20px" display="flex" flexDir="column">
            <SlideFade in={true}>
              <DiagnosticYN
                question={questions[0]}
                setState={setValidAge}
                state={validAge}
                setters={setters.slice(1)}
              />
            </SlideFade>
            {validAge === "yes" && (
              <SlideFade in={true}>
                <Box pt="10px">
                  <DiagnosticYN
                    question={questions[1]}
                    setState={setLifeExp}
                    state={lifeExp}
                    setters={setters.slice(2)}
                  />
                </Box>
              </SlideFade>
            )}
            {validAge === "no" && (
              <SlideFade in={true}>
                <RevisedFollowUp />
              </SlideFade>
            )}
            {lifeExp === "yes" && (
              <SlideFade in={true}>
                <Text>
                  Discuss lack of evidence demonstrating benefit and continue
                  ongoing care
                </Text>
              </SlideFade>
            )}
            {lifeExp === "no" && (
              <SlideFade in={true}>
                <Box pt="10px">
                  <DiagnosticYN
                    question={questions[2]}
                    setState={setPatientCVD}
                    state={patientCVD}
                    setters={setters.slice(3)}
                  />
                </Box>
              </SlideFade>
            )}
            {patientCVD === "yes" && (
              <SlideFade in={true}>
                <Box pt="10px">
                  <Text>Recommend stepped intensification</Text>
                  <Text>Maximize statin therapy or add ezetimibe</Text>
                  <Text>
                    Consider PCSK9 inhibitor only after maximizing statin
                    therapy and adding eetimibe
                  </Text>
                  <Text>
                    If MI,ACS, or CABG/PCI in the past 6 weeks, refer for
                    cardiac rehab
                  </Text>
                  <Text>Consider adding Icoapent ethial 4mg daily</Text>
                  <Text>Consider adding Benpedoic acid 180mg daily</Text>
                  <RevisedFollowUp />
                </Box>
              </SlideFade>
            )}
            {patientCVD === "no" && (
              <SlideFade in={true}>
                <Box pt="10px">
                  <DiagnosticYN
                    question={questions[3]}
                    setState={setPatientCVDSideBar}
                    state={patientCVDSideBar}
                    setters={setters.slice(4)}
                  />
                </Box>
              </SlideFade>
            )}
            {patientCVDSideBar === "yes" && (
              <SlideFade in={true}>
                <SeeSidebar3 />
              </SlideFade>
            )}
            {patientCVDSideBar === "no" && (
              <SlideFade in={true}>
                <Box pt="10px">
                  <DiagnosticYN
                    question={questions[4]}
                    setState={setPatientCVDRisk}
                    state={patientCVDRisk}
                    setters={setters.slice(5)}
                  />
                </Box>
              </SlideFade>
            )}
            {patientCVDRisk === "yes" && <SeeSidebar3 />}
            {patientCVDRisk === "no" && (
              <Box pt="10px">
                <DiagnosticYN
                  question={questions[5]}
                  setState={setPatientStatinPref}
                  state={patientStatinPref}
                  setters={setters.slice(6)}
                />
              </Box>
            )}
            {patientStatinPref === "yes" && (
              <SlideFade in={true}>
                <SeeSidebar3 />
              </SlideFade>
            )}
            {patientStatinPref === "no" && (
              <SlideFade in={true}>
                <RevisedFollowUp />
              </SlideFade>
            )}
          </FormControl>
        </Box>
        <Box w="50%">
          <SideBars />
        </Box>
      </Flex>
    </Box>
  );
}
