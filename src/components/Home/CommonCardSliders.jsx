import { Box, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

function CommonCardSliders({ ImageSrcs, heading }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
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
        // transform="translateY(-50%)"
        zIndex="1"
      />
    ),
  };

  return (
    <Box
      width="99%"
      margin="auto"
      mt={5}
      bg={"white"}
      display={{ base: "none", md: "block" }}
    >
      <Heading ml={2} size="md" my={5} pt={5}>
        {heading}
      </Heading>
      <Slider {...settings}>
        {ImageSrcs.map((el, index) => (
          <Box p={2}>
            <Box
              textAlign={"center"}
              border={"1px solid"}
              p={{ base: 2, md: 5 }}
              borderColor="gray.200"
              borderRadius={3}
              height={"350px"}
            >
              <Image key={index} src={el.img} alt={el} margin="auto" />
              <Text mt={3}>{el.head}</Text>
              <Text fontWeight={600}>{el.price}</Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default CommonCardSliders;
