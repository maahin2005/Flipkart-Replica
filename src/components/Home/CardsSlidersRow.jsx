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
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=90",
      title: "moto edge 40 neno",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=90",
      title: "vivo t2 pro 5g",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=90",
      title: "poco m6 pro",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=90",
      title: "redmi 12 5G",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/n/z/4/-original-imagz5g9gyhmgusp.jpeg?q=90",
      title: "POCO X6 Neo 5G",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=90",
      title: "poco m6 5g",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=90",
      title: "poco x6 pro",
    },
    {
      img: "https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=90",
      title: "iphone15",
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 3,
    autoplay: false,
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
                border={"1px solid"}
                p={{ base: 2, md: 5 }}
                borderColor="gray.200"
                borderRadius={3}
                height={"300px"}
                textAlign={"center"}
              >
                <Image key={index} src={el.img} alt={el} margin={"auto"} />
                <Box>
                  <Text mb={0}>{el.title}</Text>
                  <Text fontWeight={600} mb={0}>
                    incl of offers
                  </Text>
                </Box>
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
