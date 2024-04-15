import { Box, IconButton, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import Slider from "react-slick";

function SimpleGridSliderTwo() {
  let arr = [
    "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/adbdbdc36d361948.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/adbdbdc36d361948.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/adbdbdc36d361948.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/adbdbdc36d361948.png?q=20",
  ];

  let simpleImageArr = [
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/5f2f515a4cf8eee2.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/5f2f515a4cf8eee2.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/5f2f515a4cf8eee2.jpg?q=20",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <IconButton
        position="absolute"
        right="5px"
        top="50%"
        color={"black"}
        // transform="translateY(-50%)"
        // icon={<ChevronRightIcon />}
        zIndex="1"
        height={"100px"}
      />
    ),
    prevArrow: (
      <IconButton
        // icon={<ChevronLeftIcon />}
        position="absolute"
        left="5px"
        top="50%"
        height={"100px"}
        display={{ base: "none", md: "inline-block" }}
        // transform="translateY(-50%)"
        zIndex="1"
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <Box width="99%" bgColor="white" m={"auto"} mt={5}>
      <Slider {...settings}>
        {arr.map((el, index) => (
          <Box p={2}>
            <Image key={index} src={el} alt={el} />
          </Box>
        ))}
      </Slider>
      <SimpleGrid columns={3}>
        {simpleImageArr.map((el, index) => (
          <Image src={el} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default SimpleGridSliderTwo;
