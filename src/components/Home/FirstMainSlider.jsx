import { Box, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

function FirstMainSlider() {
  const ImageSrcs = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/fd78c56eb85bafd5.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3af219e83718806b.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1716f18fdf7edbbb.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5a51a6ffa84d75a7.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/07e1b1bafa69088c.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1686434dbad73524.jpg?q=20",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <Box>
      <Slider {...settings}>
        {ImageSrcs.map((el, index) => (
          <Image key={index} src={el} alt={el} />
        ))}
      </Slider>
    </Box>
  );
}

export default FirstMainSlider;
