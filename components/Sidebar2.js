import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Sidebar2() {
  return (
    <Box>
      <Heading>High-Risk CDV</Heading>
      <Text>MI or ACS in past 12 months or </Text>
      <Text>Recurrent ACS, MI or stroke or</Text>
      <Text>Known CVD (see Sidebar 1) and any of the following:</Text>
      <UnorderedList>
        <ListItem>currently smoking</ListItem>
        <ListItem>DM</ListItem>
        <ListItem>CKD</ListItem>
        <ListItem>PAD</ListItem>
        <ListItem>CABG/PCI</ListItem>
      </UnorderedList>
      <Text>Stepped intensification</Text>
      <UnorderedList>
        <ListItem>Maximize statin therapy</ListItem>
        <ListItem>
          If not already done, maximize statin therapy and add ezetimbe
        </ListItem>
        <ListItem>
          Consider PCSK9 inhibitor only after maximizing statin therapy and
          adding ezetimibe
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
