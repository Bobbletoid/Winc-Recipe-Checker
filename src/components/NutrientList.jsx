import { Stack, Text, Wrap } from "@chakra-ui/react";

const Nutrients = [
  { key: "ENERC_KCAL", label: "CALORIES" },
  { key: "CHOCDF", label: "CARBS" },
  { key: "PROCNT", label: "PROTEIN" },
  { key: "FAT", label: "FAT" },
  { key: "CHOLE", label: "CHOLESTEROL" },
  { key: "NA", label: "SODIUM" },
];

export const NutrientList = ({ totalNutrients }) => {
  const nutrients = Nutrients.map(({ key, label }) => {
    const n = totalNutrients?.[key];
    if (!n) return null;

    return {
      key,
      label: `${label}`,
      value: `${n.quantity.toFixed(0)} ${n.unit}`,
    };
  }).filter(Boolean);

  return (
    <Wrap gap={2} align="start">
      {nutrients.map((n) => (
        <Stack
          key={n.key}
          gap="0"
          color="gray.600"
          _dark={{ color: "gainsboro" }}
        >
          <Text fontSize="1em" lineHeight="1.1">
            {n.value}
          </Text>

          <Text fontSize="1.1em" lineHeight="1.1">
            {n.label}
          </Text>
        </Stack>
      ))}
    </Wrap>
  );
};
