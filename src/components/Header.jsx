import {
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  Spacer,
  Container,
} from "@chakra-ui/react";
import { ColorModeToggle } from "./ColorModeToggle";

export const Header = ({ onHome }) => {
  return (
    <Box
      as="header"
      bg="blue.600"
      color="white"
      position="sticky"
      top={0}
      zIndex="sticky"
      shadow="sm"
    >
      <Container maxW="7xl">
        <Flex h={16} align="center" px={2}>
          <Heading size="md">Winc Recipe Checker</Heading>

          <Spacer />

          <HStack spacing={6}>
            <Button
              variant="ghost"
              color="white"
              _hover={{ color: "black" }}
              _dark={{ _hover: { color: "white" } }}
              onClick={onHome}
            >
              Home
            </Button>
          </HStack>

          <ColorModeToggle />
        </Flex>
      </Container>
    </Box>
  );
};
