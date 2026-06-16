import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Stack,
  Strong,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { RecipeTag } from "../components/RecipeTag";
import { NutrientList } from "../components/NutrientList";
import { useEffect } from "react";

export const RecipePage = ({ item, clickFn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [item]);

  if (!item) return null;

  return (
    <Card.Root
      borderRadius="xl"
      transition="transform 0.15s ease"
      _light={{ bg: "blue.50", color: "black" }}
      _dark={{ color: "dimgray" }}
    >
      <Card.Body>
        <Stack direction="column" gap={{ base: 4, md: 8 }}>
          <Box
            flex="1"
            maxW="1000px"
            mx="auto"
            overflow="hidden"
            borderRadius="xl"
            alignSelf="center"
          >
            <Image
              src={item.image}
              alt={item.label}
              display="block"
              w="full"
              maxW="680px"
              maxH="60vh"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>

          <Stack
            direction={{ base: "column", sm: "row" }}
            alignItems="flex-start"
            gap={{ base: 2, md: 3 }}
          >
            <Flex gap={2} wrap="wrap" direction="column" h="100%" w="50%">
              <Stack flex="1" gap="1">
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "0.7em", md: "0.8em" }}
                  color="gray"
                  _dark={{ color: "lightslategray" }}
                  mt="1em"
                >
                  {item.mealType?.join(", ")?.toUpperCase()}
                </Text>

                <Heading fontSize={{ base: "1em", md: "1.2em" }}>
                  {item.label}
                </Heading>

                {item.totalTime !== 0 && (
                  <Text fontSize={{ base: "0.7em", md: "0.8em" }} mt="1em">
                    Total cooking time:{" "}
                    <Strong>{item.totalTime} minutes</Strong>
                  </Text>
                )}

                <Text fontSize={{ base: "0.7em", md: "0.8em" }}>
                  Servings: <Strong>{item.yield}</Strong>
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "0.8em", md: "1em" }}
                  mt="1em"
                >
                  Ingredients:
                </Text>
                <Stack spacing={1}>
                  {item?.ingredientLines?.map((ingredient, index) => (
                    <Text
                      key={index}
                      fontSize={{ base: "0.7em", md: "0.8em" }}
                      lineHeight="1.1"
                    >
                      {ingredient}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Flex>

            <Flex gap={2} wrap="wrap" direction="column" h="100%" w="50%">
              <Stack flex="1" gap="1">
                <Text fontSize={{ base: "0.8em", md: "1em" }} mt="1em">
                  Health labels:
                </Text>
                <Wrap gap={2} wrap="wrap">
                  {item.healthLabels.map((healthLabel) => (
                    <RecipeTag
                      key={healthLabel}
                      bg="purple.200"
                      _dark={{ color: "black" }}
                      fontSize={{ base: "0.3em", md: "0.5em" }}
                    >
                      {healthLabel}
                    </RecipeTag>
                  ))}
                </Wrap>

                <Text fontSize={{ base: "0.8em", md: "1em" }} mt="1em">
                  Diet labels:
                </Text>
                <Wrap gap={2} wrap="wrap">
                  {item.dietLabels.map((dietLabel) => (
                    <RecipeTag
                      key={dietLabel}
                      bg="green.300"
                      _dark={{ color: "black" }}
                      fontSize={{ base: "0.3em", md: "0.5em" }}
                    >
                      {dietLabel}
                    </RecipeTag>
                  ))}
                </Wrap>

                <Text fontSize={{ base: "0.8em", md: "1em" }} mt="1em">
                  Cautions:
                </Text>
                <Wrap gap={2} wrap="wrap">
                  {item.cautions.map((caution) => (
                    <RecipeTag
                      key={caution}
                      bg="lightpink"
                      _dark={{ color: "black" }}
                      fontSize={{ base: "0.3em", md: "0.5em" }}
                    >
                      {caution}
                    </RecipeTag>
                  ))}
                </Wrap>

                <Text
                  fontSize={{ base: "0.8em", md: "1em" }}
                  lineHeight={1.1}
                  mt="1em"
                >
                  Nutrients:
                </Text>

                <NutrientList totalNutrients={item.totalNutrients} />
              </Stack>
            </Flex>
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
