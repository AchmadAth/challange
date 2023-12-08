"use clients";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProductDetails = ({ productName, productDescription, imageUrl }) => (
  <Container maxW={"5xl"} my={12} p={"20px"}>
    <Flex
      direction={{ base: "column", md: "row" }}
      boxShadow={"lg"}
      p={10}
      rounded={"lg"}
      bg={"white"}
    >
      {/* Left Side (Image) */}
      <Box
        pr={10}
        flex={1}
        display={{ base: "none", md: "block" }}
        overflow={"hidden"}
        rounded={"lg"}
      >
        <Image
          src={imageUrl}
          alt={productName}
          objectFit={"cover"}
          w={"full"}
          h={"full"}
        />
      </Box>

      {/* Right Side (Product Details) */}
      <Stack
        spacing={4}
        justify={{ base: "center", md: "flex-start" }}
        align={{ base: "center", md: "flex-start" }}
        flex={1}
      >
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          fontWeight={"bold"}
        >
          {productName}
        </Heading>
        <Text
          color={"gray.600"}
          fontSize={{ base: "sm", sm: "lg" }}
          textAlign="justify"
        >
          {productDescription}
        </Text>
      </Stack>
    </Flex>
  </Container>
);

export default ProductDetails;
