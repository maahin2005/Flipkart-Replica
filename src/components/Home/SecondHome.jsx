import { Box } from "@chakra-ui/react";
import React from "react";
import SimpleGridFirstCards from "./SimpleGridFirstCards";
import SimpleGridSliderTwo from "./SimpleGridSliderTwo";

import { CommonSlidersCard } from "./../../helpers/ImageDropDawnsData";
import CommonCardSliders from "./CommonCardSliders";
import CommonUniqueSection from "./CommonUniqueSection";
import { sec1 } from "../../helpers/uniqueSectionData";
import SimpleFourFlex from "./SimpleFourFlex";
import { arr1, simpleImageArr2 } from "../../helpers/otherDatas";
import SimpleThree from "./SimpleThree";

function SecondHome() {
  return (
    <Box>
      <SimpleGridFirstCards />

      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <CommonUniqueSection
        heading={"Cricket Must -Haves"}
        array={sec1.el}
        sidePhoto={sec1.sideImg}
      />
      <SimpleGridFirstCards />
      <SimpleGridSliderTwo />
      <SimpleFourFlex arr={arr1} />
      <CommonUniqueSection
        heading={"Cricket Must -Haves"}
        array={sec1.el}
        sidePhoto={sec1.sideImg}
      />
      <SimpleGridSliderTwo />
      <CommonUniqueSection
        heading={"Cricket Must -Haves"}
        array={sec1.el}
        sidePhoto={sec1.sideImg}
      />
      <SimpleGridFirstCards />
      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <SimpleThree simpleImageArr={simpleImageArr2} />
      <SimpleGridSliderTwo />
      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <SimpleThree simpleImageArr={simpleImageArr2} />
    </Box>
  );
}

export default SecondHome;
