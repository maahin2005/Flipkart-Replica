import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function SimpleGridFirstCards({ dataArr }) {
  return (
    <SimpleGrid
      columns={3}
      bg={"white"}
      gap={1}
      width={"99%"}
      margin={"auto"}
      mt={5}
    >
      {dataArr.map((el, i) => (
        <Image key={i} src={el} />
      ))}
    </SimpleGrid>
  );
}

export default SimpleGridFirstCards;
