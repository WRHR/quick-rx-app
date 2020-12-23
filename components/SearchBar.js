import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
export const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Box>
      <input
        name="search"
        value={search}
        onChange={(e) => setSearch(e.value)}
        placeholder="Find a reference..."
      />
      <Button>Search</Button>
    </Box>
  );
};
