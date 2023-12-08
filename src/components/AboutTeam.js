"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const Card = ({ heading, description, image }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Flex
        direction="column"
        align="center" // Center-align the items vertically
        justify="center" // Center-align the items horizontally
      >
        <Box
          as="img"
          src={image}
          alt="Card Image"
          objectFit="cover"
          w={64}
          h={64}
          rounded="full"
        />
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"} align={"center"}>
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default function AboutTeam() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Team
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          At GammaTech, we take pride in our cohesive and dynamic team of
          professionals who are dedicated to delivering excellence in every
          endeavor. Comprising individuals with diverse skills, backgrounds, and
          expertise, our team collaborates seamlessly to turn challenges into
          opportunities. Together, we foster an environment that encourages
          creativity, mutual respect, and continuous growth, ensuring that our
          clients receive unparalleled service and our company continues to
          thrive.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Achmad Athoillah"}
            description={"CTO"}
            image="ato.jpeg"
          />
          <Card heading={"Faidh Nasr"} description={"CEO"} image="ait.png" />
          <Card heading={"M Ali R.A"} description={"COO"} image="ali.png" />
        </Flex>
      </Container>
    </Box>
  );
}
