import { Box, Heading, Text } from '@chakra-ui/react'

export default function FollowUp() {
  return(
    <Box>
      <Heading>Follow-up Evaluation</Heading>
      <Text>Primary Prevention, no statin</Text>
        <Text>Lipid panel every 10 years (nonfasting recommended)</Text>
        <Text>Repeat risk evaluation</Text>
      <ul>
        <li>Every 2 years if 6% to 12%</li>        
        <li>Every 5 years if less than 6%</li>        
        <li>If risk factors change</li>        
      </ul>
      <Text>Secondary prevention: lipid panels as needed, only if patient is higher risk and willing to intensify treatment</Text>
      <Text>Once optimal therapy is recieved, no need to recheck lipid levels routinely</Text>
    </Box>
  )
}