import { Box, Text, Heading, Container, Stack } from "@chakra-ui/react";

const CompanyHistory = () => (
  <Box bg={"#05C8AF"} py={{ base: 4, md: 20, xl: 60 }} color={"white"}>
    <Container maxW={"7xl"}>
      <Stack spacing={8} textAlign={{ base: "center", md: "left" }}>
        <Heading
          fontFamily={"heading"}
          fontWeight={700}
          textTransform={"uppercase"}
          mb={3}
          fontSize={"xl"}
        >
          Company History
        </Heading>
        <Heading mb={5} fontSize={{ base: "3xl", md: "5xl" }}>
          Gammatech: Building the Future since 2021
        </Heading>
        <Text fontSize={"xl"}>
          Founded in 2021, Gammatech has been a pioneer in creating innovative
          solutions for schools. We specialize in developing School Information
          Systems and AI Chatbots to streamline education processes.
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default CompanyHistory;
