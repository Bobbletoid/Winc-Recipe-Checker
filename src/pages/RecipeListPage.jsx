import { useState } from "react";
import { Input, SimpleGrid, VStack } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";

export const RecipeListPage = ({ clickFn }) => {
  const [search, setSearch] = useState("");

  const filteredRecipes = data.hits.filter(({ recipe }) => {
    const searchTerm = search.toLowerCase();

    return recipe.label?.toLowerCase().includes(searchTerm);
  });

  return (
    <VStack spacing={6} align="stretch">
      <Input
        placeholder="Search recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        w={{ base: "100%", sm: "30%" }}
        mx="auto"
        mb={6}
        bg={{ _light: "white", _dark: "dimgray" }}
      />
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        gap={{ base: 4, md: 6 }}
      >
        {filteredRecipes.map((item) => (
          <RecipeCard
            key={item.recipe.url}
            item={item.recipe}
            clickFn={clickFn}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
