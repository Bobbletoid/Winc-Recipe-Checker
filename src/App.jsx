import { Header } from "./components/Header";
import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { Box, Container } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <>
      <Header onHome={() => setSelectedRecipe(null)} />
      <Box _light={{ bg: "blue.500" }} _dark={{ bg: "gray.800" }}>
        <Container as="main" maxW="7xl" py={{ base: 6, md: 10 }}>
          {selectedRecipe ? (
            <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
          ) : (
            <RecipeListPage clickFn={setSelectedRecipe} />
          )}
        </Container>
      </Box>
    </>
  );
};
