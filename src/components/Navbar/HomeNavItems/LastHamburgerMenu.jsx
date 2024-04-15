import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Image,
  Flex,
} from "@chakra-ui/react";

function LastHamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen} onClose={onClose}>
        <MenuButton
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          bg={isOpen ? "gray.100" : "transparent"}
          border="1px solid transparent"
          borderColor={isOpen ? "gray.300" : "none"}
          borderRadius={5}
          p={2}
          display={{ base: "none", md: "flex" }}
        >
          <Image
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
            alt="register-user"
          />
        </MenuButton>
        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          position={"relative"}
          bottom={2}
        >
          <MenuItem>
            <Flex gap={3} alignItems={"center"}>
              <Image
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg"
                width={"10%"}
              />
              Notification Preferences
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex gap={3} alignItems={"center"}>
              <Image
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg"
                width={"10%"}
              />
              24x7 Customer Care
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex gap={3} alignItems={"center"}>
              <Image
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg"
                width={"15%"}
              />
              Advertise
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex gap={3} alignItems={"center"}>
              <Image
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg"
                width={"15%"}
              />
              Download App
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
//
export default LastHamburgerMenu;
