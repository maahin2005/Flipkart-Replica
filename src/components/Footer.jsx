import {
  Box,
  Divider,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  const UpperHeading = ({ heading }) => {
    return (
      <>
        <Text mb={5} color="#696d65">
          {heading}
        </Text>
      </>
    );
  };

  const CommonText = ({ text, isTrue = true }) => {
    return (
      <>
        <Text
          fontWeight={700}
          _hover={{ textDecoration: isTrue ? "underline" : "none" }}
          cursor={isTrue ? "pointer" : "default"}
          fontSize={12}
        >
          {text}
        </Text>
      </>
    );
  };

  const BottomTexts = ({ iconSrc, text }) => {
    return (
      <Flex gap={2}>
        <Image src={iconSrc} />

        <Text>{text}</Text>
      </Flex>
    );
  };

  return (
    <Box
      height={"max-content"}
      bg="#212121"
      color={"white"}
      display={{ base: "none", md: "block" }}
    >
      <SimpleGrid pt={"40px"} px={"60px"} columns={2} mb={10}>
        <SimpleGrid
          columns={4}
          gap={5}
          pr={4}
          borderRight={"1px solid"}
          borderColor={"gray.500"}
        >
          <Box>
            <UpperHeading heading="ABOUT" />
            <CommonText text="Cotact Us" />
            <CommonText text="About Us" />
            <CommonText text="Careers" />
            <CommonText text="Flipkart Stories" />
            <CommonText text="Press" />
            <CommonText text="Corporate Information" />
          </Box>
          <Box>
            <UpperHeading heading="GROUP COMPANIES" />
            <CommonText text="Myntra" />
            <CommonText text="Flipkart Wholesale" />
            <CommonText text="Cleartrip" />
            <CommonText text="Shopsy" />
          </Box>
          <Box>
            <UpperHeading heading="HELP" />
            <CommonText text="Payments" />
            <CommonText text="Shipping" />
            <CommonText text="Cancellation & Returns" />
            <CommonText text="FAQ" />
            <CommonText text="Report Infringement" />
          </Box>
          <Box>
            <UpperHeading heading="CONSUMER POLICY" />
            <CommonText text="Cancellation & Returns" />
            <CommonText text="Terms Of Use" />
            <CommonText text="Security" />
            <CommonText text="Privacy" />
            <CommonText text="Sitemap" />
            <CommonText text="Grievance Redressal" />
            <CommonText text="EPR Compliance" />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} gap={2} pl={7}>
          <Box>
            <UpperHeading heading="Mail Us:" />
            <CommonText
              isTrue={false}
              text="Flipkart Internet Private Limited, "
            />
            <CommonText isTrue={false} text="Buildings Alyssa, Begonia &  " />
            <CommonText isTrue={false} text="Clove Embassy Tech Village, " />
            <CommonText
              isTrue={false}
              text="Outer Ring Road, Devarabeesanahalli Village,"
            />
            <CommonText isTrue={false} text="Bengaluru, 560103," />
            <CommonText isTrue={false} text="Karnataka, India" />
            <Box mt={6}>
              <UpperHeading heading="Social:" />
              <Flex fontSize={20} gap={3}>
                <Icon as={CiFacebook} color={"white"} />
                <Icon as={FaXTwitter} color={"white"} />
                <Icon as={AiOutlineYoutube} color={"white"} />
              </Flex>
            </Box>
          </Box>
          <Box>
            <UpperHeading heading="Registered Office Address:" />
            <CommonText
              isTrue={false}
              text="Flipkart Internet Private Limited, "
            />
            <CommonText isTrue={false} text=" Buildings Alyssa, Begonia &" />
            <CommonText isTrue={false} text=" Clove Embassy Tech Village, " />
            <CommonText
              isTrue={false}
              text=" Outer Ring Road, Devarabeesanahalli Village, "
            />
            <CommonText isTrue={false} text="Bengaluru, 560103," />
            <CommonText isTrue={false} text="Karnataka, India" />
            <CommonText isTrue={false} text=" CIN : U51109KA2012PTC066107 " />
            <Text display={"inline"} fontWeight={600}>
              Telephone:
              <Text color={"blue"} display={"inline"}>
                {" "}
                044-45614700
              </Text>
            </Text>
          </Box>
        </SimpleGrid>
      </SimpleGrid>
      <Divider />
      <Flex
        width={"90%"}
        margin="auto"
        p={6}
        alignItems={"center"}
        justify="space-between"
      >
        <BottomTexts
          text="Become a Seller"
          iconSrc={
            "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
          }
        />
        <BottomTexts
          text="Become a Seller"
          iconSrc={
            "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
          }
        />
        <BottomTexts
          text="Become a Seller"
          iconSrc={
            "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
          }
        />
        <BottomTexts
          text="Become a Seller"
          iconSrc={
            "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
          }
        />

        <Flex>
          <Text>© 2007-2024 Flipkart.com</Text>
        </Flex>
        <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" />
      </Flex>
    </Box>
  );
}

export default Footer;
