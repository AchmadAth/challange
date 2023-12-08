"use clients";
import { Box, Text, Heading, Container, Stack, Flex } from "@chakra-ui/react";

const CompanyCulture = () => (
  <Box bg={"#088BD8"} py={{ base: 4, md: 20, xl: 60 }} color={"white"}>
    <Container maxW={"7xl"}>
      <Stack spacing={8} textAlign={{ base: "center", md: "left" }}>
        <Heading
          fontFamily={"heading"}
          fontWeight={700}
          textTransform={"uppercase"}
          mb={3}
          fontSize={"xl"}
        >
          Company Culture
        </Heading>
        <Heading mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
          Fostering Teamwork for Great Achievements
        </Heading>
        <Flex align="center" justify="center">
          <IconBox bgImage="/path/to/teamwork-icon.png" mr={4} />
          <Text fontSize={"xl"}>
            Embracing a culture of teamwork, we believe in the strength of
            collaboration and mutual support. Our diverse team works together to
            achieve common goals and create a positive impact.
          </Text>
        </Flex>
        <Flex align="center" justify="center">
          <IconBox bgImage="/path/to/tasks-icon.png" mr={4} />
          <Text fontSize={"xl"}>
            Handling tasks collectively, we encourage each team member to
            contribute their unique skills and perspectives. This collaborative
            approach ensures efficient problem-solving and successful
            completions.
          </Text>
        </Flex>
      </Stack>
    </Container>
  </Box>
);

const IconBox = ({ bgImage, ...rest }) => (
  <Box
    boxSize={10}
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
    backgroundImage={`url(${bgImage})`}
    {...rest}
  />
);

export default CompanyCulture;
