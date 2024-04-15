import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import LoginButtonDrawer from "./HomeNavItems/LoginButtonDrawer";
import LastHamburgerMenu from "./HomeNavItems/LastHamburgerMenu";

function HomeNavbar() {
  return (
    <Box py={3} px={{ base: 1, sm: 7 }}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        height="45px"
      >
        <Image
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="flipkart_logo"
        />
        <Box
          background={"#f0f5ff"}
          flex={".8"}
          width={"60%"}
          borderRadius={6}
          display={{ base: "none", md: "flex" }}
        >
          <form
            style={{
              width: "100%",
            }}
          >
            <Flex width={"100%"}>
              <Button variant={"none"}>
                <Image src="/svgs/searchIcon.svg" />
              </Button>

              <Input
                width={"100%"}
                placeholder="Search for Products, Brands and More"
                variant="unstyled"
                bg={"transparent"}
                fontSize={"1.12rem"}
              />
            </Flex>
          </form>
        </Box>

        <LoginButtonDrawer />
        <Button variant={"unstyled"} display={{ base: "none", md: "flex" }}>
          <Image
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt="register-user"
          />
          <Text display={{ base: "none", md: "none", lg: "flex" }} m={0}>
            Cart
          </Text>
        </Button>
        <Button variant={"unstyled"} display={{ base: "none", md: "flex" }}>
          <Image
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
            alt="register-user"
          />
          <Text display={{ base: "none", md: "none", lg: "flex" }} m={0}>
            Become a Seller
          </Text>
        </Button>

        <LastHamburgerMenu />
      </Flex>
    </Box>
  );
}

export default HomeNavbar;
