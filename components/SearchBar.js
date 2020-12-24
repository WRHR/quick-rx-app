import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Flex>
      <Input
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Find a reference..."
      />
      <Button>Search</Button>
    </Flex>
  );
};

export default SearchBar