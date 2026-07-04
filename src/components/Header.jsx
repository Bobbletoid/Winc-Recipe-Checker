import {
  Box,
  Flex,
  Heading,
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
        <Flex h={16} align="center">
          <Heading
            fontSize="md"
            onClick={onHome}
            cursor="pointer"
          >
            Winc Recipe Checker
          </Heading>

          <Spacer />

          <ColorModeToggle />
        </Flex>
      </Container>
    </Box>
  );
};
