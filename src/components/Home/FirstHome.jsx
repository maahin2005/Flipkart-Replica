import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  dataArrayOfObj,
  dataArrayWithDropDowns,
} from "../../helpers/ImageDropDawnsData";
import SubCategoryMenu from "./SubCategoryMenu";

function FirstHome() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [nestedOpenDropdown, setNestedOpenDropdown] = useState(null);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setIsHover(false);
  };

  const handleNestedMouseEnter = (index) => {
    setNestedOpenDropdown(index);
    setIsHover(true);
  };
  const handleNestedMouseLeave = () => {
    setNestedOpenDropdown(null);
    setIsHover(openDropdown ? true : false);
  };

  const SimpleImageCarts = ({ imgSrc, heading, isDropdown, index }) => {
    return (
      <SimpleGrid justifyContent={"center"}>
        <Image src={imgSrc} alt={heading} />
        <Flex alignContent={"center"} justifyContent={"center"} gap={2}>
          <Text textAlign={"center"} fontWeight={600}>
            {heading}
          </Text>
          {isDropdown && (
            <IconButton
              as={openDropdown === index ? ChevronUpIcon : ChevronDownIcon}
              variant={"unstyled"}
              size={"vs"}
              mt={2}
            />
          )}
        </Flex>
      </SimpleGrid>
    );
  };

  const ImageCardsWithDropDown = ({ imgSrc, heading, index, arr_data }) => {
    const isDropdownOpen = openDropdown === index;
    const newHover = isHover && nestedOpenDropdown === index;

    return (
      <Menu isOpen={isDropdownOpen || newHover} onClose={handleMouseLeave}>
        <MenuButton
          onMouseEnter={() => {
            handleMouseEnter(index);
            handleNestedMouseEnter(index);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <SimpleImageCarts
            imgSrc={imgSrc}
            heading={heading}
            isDropdown
            index={index}
          />
        </MenuButton>
        <MenuList
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          position={"relative"}
          bottom={2}
        >
          {arr_data.map((el, i) => (
            <>
              <MenuItem
                key={i}
                onMouseEnter={() => handleNestedMouseEnter(index)}
                onMouseLeave={handleNestedMouseLeave}
                pr={0}
              >
                <Menu>
                  <MenuButton
                    p={1}
                    width={"100%"}
                    textAlign={"left"}
                    onMouseEnter={() => handleNestedMouseEnter(index)}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    {el}
                  </MenuButton>
                </Menu>
              </MenuItem>
            </>
          ))}
        </MenuList>
      </Menu>
    );
  };

  return (
    <>
      <Box width="99%" background="white" margin={"auto"}>
        <Box overflowX="auto">
          <Flex
            width={{ base: "max-content", md: "85%" }}
            margin={"auto"}
            justify={"space-between"}
            p={3}
            gap={{ base: 5, md: 1 }}
          >
            <SimpleImageCarts
              imgSrc={dataArrayOfObj[0].image}
              heading={dataArrayOfObj[0].head}
            />
            <SimpleImageCarts
              imgSrc={dataArrayOfObj[1].image}
              heading={dataArrayOfObj[1].head}
            />

            <ImageCardsWithDropDown
              isTrue={true}
              imgSrc={dataArrayWithDropDowns[0].image}
              heading={dataArrayWithDropDowns[0].head}
              index={0}
              arr_data={dataArrayWithDropDowns[0].arr_data}
              arr_inner_data={dataArrayWithDropDowns[0].arr_inner_data}
            />

            <ImageCardsWithDropDown
              imgSrc={dataArrayWithDropDowns[1].image}
              heading={dataArrayWithDropDowns[1].head}
              index={1}
              arr_data={dataArrayWithDropDowns[0].arr_data}
              arr_inner_data={dataArrayWithDropDowns[0].arr_inner_data}
            />

            <ImageCardsWithDropDown
              imgSrc={dataArrayWithDropDowns[2].image}
              heading={dataArrayWithDropDowns[2].head}
              index={2}
              arr_data={dataArrayWithDropDowns[0].arr_data}
              arr_inner_data={dataArrayWithDropDowns[0].arr_inner_data}
            />
            <SimpleImageCarts
              imgSrc={dataArrayOfObj[2].image}
              heading={dataArrayOfObj[2].head}
            />
            <SimpleImageCarts
              imgSrc={dataArrayOfObj[3].image}
              heading={dataArrayOfObj[3].head}
            />
            <ImageCardsWithDropDown
              imgSrc={dataArrayWithDropDowns[3].image}
              heading={dataArrayWithDropDowns[3].head}
              index={3}
              arr_data={dataArrayWithDropDowns[0].arr_data}
              arr_inner_data={dataArrayWithDropDowns[0].arr_inner_data}
            />
            <ImageCardsWithDropDown
              imgSrc={dataArrayWithDropDowns[4].image}
              heading={dataArrayWithDropDowns[4].head}
              index={4}
              arr_data={dataArrayWithDropDowns[0].arr_data}
              arr_inner_data={dataArrayWithDropDowns[0].arr_inner_data}
            />
          </Flex>
        </Box>
      </Box>
      {isHover && (
        <SubCategoryMenu
          nestedOpenDropdown={nestedOpenDropdown}
          arrOfObj={dataArrayWithDropDowns[0]}
          setIsHover={setIsHover}
        />
      )}
    </>
  );
}

export default FirstHome;
