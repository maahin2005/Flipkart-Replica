import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function SimpleGridFirstCards() {
  const dataArr = [
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20",
  ];

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
