import { Box, Heading } from "@chakra-ui/react";

export default function Sidebar2() {
  <Box>
    <Heading>High-Risk CDV</Heading>
    <Text>MI or ACS in past 12 months or </Text>
    <Text>Recurrent ACS, MI or stroke or</Text>
    <Text>Known CVD (see Sidebar 1) and any of the following:</Text>
    <ul>
      <li>currently smoking</li>
      <li>DM</li>
      <li>CKD</li>
      <li>PAD</li>
      <li>CABG/PCI</li>
    </ul>
    <Text>Stepped intensification</Text>
    <ul>
      <li>Maximize statin therapy</li>
      <li>If not already done, maximize statin therapy and add ezetimbe</li>
      <li>
        Consider PCSK9 inhibitor only after maximizing statin therapy and adding
        ezetimibe
      </li>
    </ul>
  </Box>;
}
