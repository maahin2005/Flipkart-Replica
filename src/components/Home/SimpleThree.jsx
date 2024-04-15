import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function SimpleThree({ simpleImageArr }) {
  return (
    <SimpleGrid columns={3}>
      {simpleImageArr.map((el, index) => (
        <Image src={el} key={index} />
      ))}
    </SimpleGrid>
  );
}

export default SimpleThree;
