"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={"auto"}
    >
      <Container
        as={Stack}
        maxW={"5xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"/"}>
            Home
          </Box>
          <Box as="a" href={"/about"}>
            About
          </Box>
          <Box as="a" href={"/services"}>
            Services
          </Box>
          <Box as="a" href={"/teams"}>
            Teams
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
