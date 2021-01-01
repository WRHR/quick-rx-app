import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/table";

export default function Sidebar3() {
  return (
    <Table variant="striped">
      <TableCaption>
        In patients who are intolerant of statins: after washout e.g., 1 month,
        rechallenge with same or another statin rather than switching medication
        class. Intensified patient care e.g., phone calls, e-mails, patient
        education, drug regimen simplification may improve adherence to
        lipid-lowering medications.
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Generic Name</Th>
          <Th>Moderate Dose (mg)</Th>
          <Th>High Dose, (mg)</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Atorvastatin</Td>
          <Td>10-20</Td>
          <Td>40-80</Td>
        </Tr>
        <Tr>
          <Td>Rosuvastatin</Td>
          <Td>5-10</Td>
          <Td>20-40</Td>
        </Tr>
        <Tr>
          <Td>Simvastin</Td>
          <Td>20-40</Td>
          <Td>N/A</Td>
        </Tr>
        <Tr>
          <Td>Pravastatin</Td>
          <Td>40-80</Td>
          <Td>N/A</Td>
        </Tr>
        <Tr>
          <Td>Lovastatin</Td>
          <Td>40-80</Td>
          <Td>N/A</Td>
        </Tr>
        <Tr>
          <Td>Fluvastatin</Td>
          <Td>80(sustained release) or 40 (twice daily)</Td>
          <Td>N/A</Td>
        </Tr>
        <Tr>
          <Td>Pitvastatin</Td>
          <Td>1-4</Td>
          <Td>N/A</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
