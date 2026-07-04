import { useState } from "react";
import { Center, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";

export const RecipeListPage = ({ clickFn }) => {
  const [search, setSearch] = useState("");

  const filteredRecipes = data.hits.filter(({ recipe }) => {
    const searchTerm = search.toLowerCase();
    return recipe.label?.toLowerCase().includes(searchTerm);
  });

  return (
    <VStack gap="6" width="100%">
      <Input
        placeholder="Search recipe..."
        _placeholder={{ _dark: { color: "white" } }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        w={{ base: "100%", sm: "30%" }}
        mx="auto"
        mb={6}
        bg={{ _light: "white", _dark: "gray.400" }}
      />

      {filteredRecipes.length === 0
      ? (
        <Center p="10" flexDirection="column" gap="2">
          <Text fontSize="xl"
                fontWeight="bold"
                color={{ _light: "gray.800", _dark: "gray.600" }}
          >
            No recipes found
          </Text>
          <Text fontSize="sm"
                color={{ _light: "gray.700", _dark: "gray.400" }}
          >
            Try adjusting your search terms.
          </Text>
        </Center>
        )
      : (
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
      )}
    </VStack>
  );
};

