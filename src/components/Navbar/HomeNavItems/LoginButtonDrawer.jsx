import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  IconButton,
  Image,
  Box,
  Button,
  Flex,
  Text,
  Divider,
  Icon,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";

function LoginButtonDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg={isOpen ? "#2a55e5" : "transparent"}
        color={isOpen ? "white" : "black"}
        px={2}
        py={1}
        borderRadius={10}
      >
        <Button
          display="flex"
          variant="unstyled"
          alignItems={"center"}
          gap={2}
          fontSize={17}
        >
          <Image
            src={
              isOpen
                ? "/svgs/LoginUser.svg"
                : "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
            }
            alt="register-user"
          />
          Login
          <IconButton
            as={isOpen ? ChevronUpIcon : ChevronDownIcon}
            variant={"unstyled"}
            size={"vs"}
          />
        </Button>
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        position={"relative"}
        bottom={2}
        width={"300px"}
      >
        <MenuItem borderBottom={"1px solid"} borderColor={"gray.300"}>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width="100%"
          >
            <Text>New Customer? </Text>
            <Button variant={"unstyled"} color={"blue"} fontSize={20}>
              Sign Up
            </Button>
          </Flex>
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem>
          <Flex gap={3} alignItems={"center"}>
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              width={"20%"}
            />
            My Profile
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex gap={3} alignItems={"center"}>
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg"
              width={"10%"}
            />
            Flipkart Plus Zone
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex gap={3} alignItems={"center"}>
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"
              width={"20%"}
            />
            Orders
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex gap={3} alignItems={"center"}>
            <Icon as={CiHeart} />
            Whishlist
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex gap={3}>
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg"
              width={"20%"}
              alignItems={"center"}
            />
            Rewards
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex gap={3}>
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg"
              width={"20%"}
              alignItems={"center"}
            />
            Gift Cards
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default LoginButtonDrawer;
