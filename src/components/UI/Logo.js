import React from "react";
import { Box, Text } from "@chakra-ui/core";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Connect.io
      </Text>
    </Box>
  );
}