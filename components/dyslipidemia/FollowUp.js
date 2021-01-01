import { Box, Heading, Text, UnorderedList,ListItem } from '@chakra-ui/react'

export default function FollowUp() {
  return(
    <Box pt='10px'>
      <Heading size='lg'>Follow-up Evaluation</Heading>
      <Text>Primary Prevention, no statin</Text>
        <Text>Lipid panel every 10 years (nonfasting recommended)</Text>
        <Text>Repeat risk evaluation</Text>
      <UnorderedList>
        <ListItem>Every 2 years if 6% to 12%</ListItem>        
        <ListItem>Every 5 years if less than 6%</ListItem>        
        <ListItem>If risk factors change</ListItem>        
      </UnorderedList>
      <Text>Secondary prevention: lipid panels as needed, only if patient is higher risk and willing to intensify treatment</Text>
      <Text>Once optimal therapy is recieved, no need to recheck lipid levels routinely</Text>
    </Box>
  )
}