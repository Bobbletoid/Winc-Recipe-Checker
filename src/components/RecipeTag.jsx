import { Tag } from "@chakra-ui/react";

export const RecipeTag = ({ children, ...props }) => {
  return (
    <Tag.Root
      p={{ base: 0.5, md: 1 }}
      variant="solid"
      color="black"
      fontWeight="bold"
      textTransform="uppercase"
      {...props}
    >
      <Tag.Label>{children}</Tag.Label>
    </Tag.Root>
  );
};
