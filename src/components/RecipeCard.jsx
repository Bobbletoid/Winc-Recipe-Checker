import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Stack,
  Strong,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { RecipeTag } from "./RecipeTag";

export const RecipeCard = ({ item, clickFn }) => {
  const vegan = item.healthLabels.includes("Vegan");
  const vegetarian = item.healthLabels.includes("Vegetarian");

  const otherHealthLabels = item.healthLabels.filter(
    (label) => label !== "Vegan" && label !== "Vegetarian",
  );

  const dish =
    item.dishType[0].charAt(0).toUpperCase() + item.dishType[0].slice(1);

  return (
    <Card.Root
      borderRadius="xl"
      w="full"
      h="auto"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
      _dark={{ bg: "dimgray" }}
      transition="transform 0.15s ease"
      bg="blue.50"
    >
      <Box
        w="full"
        aspectRatio={{ base: 16 / 9, md: 4 / 3 }}
        overflow="hidden"
        borderRadius="xl"
      >
        <Image
          src={item.image}
          alt={item.label}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>
      <Card.Body>
        <Stack align="center" textAlign="center" gap={2}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md" }}
            color="gray"
            textAlign="center"
            _dark={{ color: "black" }}
          >
            {item.mealType?.join(", ")?.toUpperCase()}
          </Text>

          <Heading
            fontWeight="bold"
            fontSize={{ base: "md", md: "xl" }}
            color="black"
          >
            {item.label}
          </Heading>

          <Wrap gap={2} wrap="wrap" justify="center">
            {vegan && (
              <RecipeTag
                bg="green.300"
                _dark={{ color: "black" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                Vegan
              </RecipeTag>
            )}

            {vegetarian && (
              <RecipeTag
                bg="green.300"
                _dark={{ color: "black" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                Vegetarian
              </RecipeTag>
            )}
          </Wrap>

          <Wrap gap={2} wrap="wrap" justify="center">
            {otherHealthLabels.slice(0, 2).map((healthLabel) => (
              <RecipeTag
                key={healthLabel}
                bg="purple.300"
                _dark={{ color: "black" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                {healthLabel}
              </RecipeTag>
            ))}
          </Wrap>

          <Text color="gray" textAlign="center" _dark={{ color: "black" }}>
            Dish: <Strong>{dish}</Strong>
          </Text>

          <Text color="gray" textAlign="center" _dark={{ color: "black" }}>
            Cautions:
          </Text>
          <Flex gap={2} wrap="wrap">
            {item.cautions.slice(0, 2).map((caution) => (
              <RecipeTag
                key={caution}
                bg="lightpink"
                _dark={{ color: "black" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                {caution}
              </RecipeTag>
            ))}
          </Flex>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
