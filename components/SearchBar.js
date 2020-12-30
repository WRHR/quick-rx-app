import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <FormControl>
      <Flex pr='5px' >
        <Input
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find a reference..."
        />
        <Button type="submit" >Search</Button>
      </Flex>
    </FormControl>
  );
};

export default SearchBar;
