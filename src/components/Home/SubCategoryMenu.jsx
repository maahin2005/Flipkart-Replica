import React, { useState } from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const SubCategoryMenu = ({ nestedOpenDropdown, arrOfObj, setIsHover }) => {
  const leftPosition =
    nestedOpenDropdown === 0
      ? 570
      : nestedOpenDropdown === 1
      ? 700
      : nestedOpenDropdown === 2
      ? 840
      : nestedOpenDropdown === 3
      ? 795
      : nestedOpenDropdown === 4
      ? 1005
      : 520;
  console.log(nestedOpenDropdown + nestedOpenDropdown * 100 + 620);

  return (
    <>
      <div
        style={{
          position: "absolute",

          left: leftPosition,

          top: "210px",

          zIndex: 999,
          display: nestedOpenDropdown !== null ? "block" : "none",
        }}
      >
        <UnorderedList
          display={{ base: "none", md: "block" }}
          onMouseEnter={() => setIsHover(true)}
          // onMouseLeave={() => setIsHover(false)}
          listStyleType="none"
          bg={"white"}
          p={3}
          px={5}
          border={"1px solid"}
          borderColor={"gray.300"}
          borderRadius={10}
        >
          {arrOfObj.arr_inner_data.Men.map((el, i) => (
            <ListItem
              my={2}
              key={el}
              fontWeight={i === 0 ? 700 : 400}
              cursor={"pointer"}
              _hover={{ bg: "gray.100" }}
              p={2}
            >
              {el}
            </ListItem>
          ))}
        </UnorderedList>
      </div>
    </>
  );
};

export default SubCategoryMenu;
