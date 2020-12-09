import { Box, Heading } from "@chakra-ui/react";

export default function Sidebar3() {
  return (
    <Box>
      <Heading>Drug Doses</Heading>
      <table>
        <tr>
          <th>Generic Name</th>
          <th>Moderate Dose, mg</th>
          <th>High Dose, mg</th>
        </tr>
        <tbody>
          <tr>
            <td>Atorvastatin</td>
            <td>10-20</td>
            <td>40-80</td>
          </tr>
          <tr>
            <td>Rosuvastatin</td>
            <td>5-10</td>
            <td>20-40</td>
          </tr>
          <tr>
            <td>Simvastin</td>
            <td>20-40</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Pravastatin</td>
            <td>40-80</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Lovastatin</td>
            <td>40-80</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Fluvastatin</td>
            <td>80(sustained release) or 40(twice daily)</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Pitvastatin</td>
            <td>1-4</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td colSpan='3'>
              In patients who are intolerant of statins: after washout(e.g., 1 month), rechallenge with same or another statin rather than switching medication class.
              Intensified patient care(e.g., phone calls, e-mails, patient education, drug regimen simplification) may improve adherence to lipid-lowering medications.
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}
