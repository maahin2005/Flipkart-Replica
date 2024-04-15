import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function SimpleFourFlex({ arr }) {
  return (
    <SimpleGrid columns={4}>
      {arr.map((element, i) => {
        return <Image src={element} key={i} />;
      })}
    </SimpleGrid>
  );
}

export default SimpleFourFlex;
