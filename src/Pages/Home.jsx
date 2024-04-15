import { Box } from "@chakra-ui/react";
import React from "react";
import FirstHome from "../components/Home/FirstHome";
import FirstMainSlider from "../components/Home/FirstMainSlider";
import CardsSlidersRow from "../components/Home/CardsSlidersRow";
import SecondHome from "../components/Home/SecondHome";

function Home() {
  return (
    <Box width={"100vw"} height={"max-content"} p={3} bg={"#f1f2f4"}>
      <FirstHome />

      <Box mt={5} width={"99%"} mx={"auto"}>
        <FirstMainSlider />
        <CardsSlidersRow />
      </Box>
      <SecondHome />
    </Box>
  );
}

export default Home;
