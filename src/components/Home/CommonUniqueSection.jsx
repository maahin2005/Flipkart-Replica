import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function CommonUniqueSection({ heading, array, sidePhoto }) {
  return (
    <Flex height={"max-content"} gap={5} p={5}>
      <Box
        width={"30%"}
        bg={"white"}
        px={3}
        py={1}
        display={{ base: "none", md: "inline-block" }}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading size="md" px={2} py={3}>
            {heading}
          </Heading>
          <Icon as={IoIosArrowDroprightCircle} color={"blue"} />
        </Flex>
        <SimpleGrid columns={2} gap={1}>
          {array.map((el) => (
            <Box
              p={2}
              ml={2}
              py={1}
              border={"1px solid"}
              borderRadius={5}
              borderColor={"gray.300"}
            >
              <Image src={el.img} width={"70%"} margin={"auto"} />
              <Text>{el.title}</Text>
              <Text color={"#108934"} fontWeight={600}>
                {el.greenTitle}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box width={"80%"}>
        <Image src={sidePhoto} width={"100%"} />
      </Box>
    </Flex>
  );
}

export default CommonUniqueSection;
