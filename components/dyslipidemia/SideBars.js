import { TabList, TabPanel, TabPanels, Tabs, Tab } from "@chakra-ui/react";
import Sidebar1 from "./Sidebar1";
import Sidebar2 from "./Sidebar2";
import Sidebar3 from "./Sidebar3";

export default function SideBars() {
  return (
    <Tabs >
      <TabList>
        <Tab>Sidebar 1</Tab>
        <Tab>Sidebar 2</Tab>
        <Tab>Sidebar 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Sidebar1 />
        </TabPanel>
        <TabPanel>
          <Sidebar2 />
        </TabPanel>
        <TabPanel>
          <Sidebar3 />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
