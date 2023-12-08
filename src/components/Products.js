"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Products() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Services and Products
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          We focus on meeting customer needs with affordable and competitive
          solutions, showing our commitment to delivering real value through
          technology. At every step, we aim to make things easier through
          cutting-edge technology, using it to drive progress.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"School Information System"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "In today's dynamic educational landscape, schools face unprecedented challenges in managing information, optimizing operations, and meeting the evolving needs of students, parents, and staff. At GammaTech, we understand that a successful school relies on efficient administration and the ability to adapt to changing circumstances."
            }
            href={"#"}
          />
          <Card
            heading={"AI Chatbot Service"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Our AI Chatbots are designed to understand and engage with your customers like never before, providing quick, relevant, and personalized responses."
            }
            href={"#"}
          />
          <Card
            heading={"Web Development"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "At GammaTech, we don't just build websites; we craft digital experiences that captivate and convert. Our web development services are finely tuned to meet evolving customer needs for seamless, engaging, and visually striking online platforms by your needs."
            }
            href={"#"}
          />
          <Card
            heading={"Digital Marketing Service"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Journey into the hearts and minds of your audience. We're here to decode consumer behavior, anticipate their desires, and craft compelling digital narratives that resonate."
            }
            href={"#"}
          />
          <Card
            heading={"Data Science Service"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Our Services are the compass guiding your brand through the maze of information. We're not just analysts; we're data virtuosos, unraveling insights from complex datasets and transforming them into actionable strategies that empower your brand."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
