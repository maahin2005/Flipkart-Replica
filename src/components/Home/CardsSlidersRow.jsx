import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

function CardsSlidersRow() {
  const ImageSrcs = [
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "moto edge 40 neno",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 3,
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
    <Flex mt={5}>
      <Box
        width={{ base: "99%", md: "80%" }}
        background="white"
        display={{ base: "none", md: "block" }}
      >
        <Heading size="md" py={{ base: 2, md: 8 }} pl={5}>
          Best Deals on Smartphones
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
              >
                <Image key={index} src={el.img} alt={el} />
                <Text mt={3}>{el.title}</Text>
                <Text fontWeight={600}>incl of offers</Text>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box px={5}>
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/8e237b77b65b6843.png?q=20" />
      </Box>
    </Flex>
  );
}

export default CardsSlidersRow;
