import React, { useState } from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const SubCategoryMenu = ({ nestedOpenDropdown, arrOfObj, setIsHover }) => {
  const leftPosition =
    nestedOpenDropdown === 0
      ? 580
      : nestedOpenDropdown === 1
      ? 700
      : nestedOpenDropdown === 2
      ? 840
      : nestedOpenDropdown === 3
      ? 830
      : nestedOpenDropdown === 4
      ? 1040
      : 520;
  console.log(nestedOpenDropdown + nestedOpenDropdown * 100 + 620);

  return (
    <>
      <div
        style={{
          position: "absolute",

          left: leftPosition,
          zIndex: 999,
          display: nestedOpenDropdown !== null ? "block" : "none",
        }}
      >
        <UnorderedList
          display={{ base: "none", md: "block" }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          listStyleType="none"
          bg={"white"}
          p={3}
          border={"1px solid"}
          borderColor={"gray.300"}
          borderRadius={10}
        >
          {arrOfObj.arr_inner_data.Men.map((el, i) => (
            <ListItem my={2} key={el} fontWeight={i === 0 ? 700 : 400}>
              {el}
            </ListItem>
          ))}
        </UnorderedList>
      </div>
    </>
  );
};

export default SubCategoryMenu;

// import React, { useState } from "react";
// import { ListItem, UnorderedList } from "@chakra-ui/react";

// const SubCategoryMenu = ({ nestedOpenDropdown, arrOfObj }) => {
//   const [position, setPosition] = useState(null);

//   switch (nestedOpenDropdown) {
//     case 0:
//       setPosition(590);
//       break;
//     case 1:
//       setPosition(700);
//       break;
//     default:
//       setPosition(0);
//       break;
//   }

//   return (
//     <>
//       <div
//         style={{
//           position: "absolute",
//           // top: "100%",
//           left: position,
//           zIndex: 999,
//           display: nestedOpenDropdown !== null ? "block" : "none",
//         }}
//       >
//         <UnorderedList listStyleType="none" bg="white" p={3}>
//           {arrOfObj.arr_inner_data.Men.map((el, index) => (
//             <ListItem key={index}>{el}</ListItem>
//           ))}
//         </UnorderedList>
//       </div>
//     </>
//   );
// };

// export default SubCategoryMenu;
