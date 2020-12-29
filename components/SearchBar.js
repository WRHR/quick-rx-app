import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Flex>
      <FormControl>
        <Input
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find a reference..."
        />
        <Button type='submit'>Search</Button>
      </FormControl>
    </Flex>
  );
};

export default SearchBar;
