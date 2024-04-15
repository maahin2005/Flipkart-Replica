import { Box } from "@chakra-ui/react";
import React from "react";
import SimpleGridFirstCards from "./SimpleGridFirstCards";
import SimpleGridSliderTwo from "./SimpleGridSliderTwo";

import { CommonSlidersCard } from "./../../helpers/ImageDropDawnsData";
import CommonCardSliders from "./CommonCardSliders";
import CommonUniqueSection from "./CommonUniqueSection";
import { sec1 } from "../../helpers/uniqueSectionData";
import SimpleFourFlex from "./SimpleFourFlex";
import { arr, arr1, dataArr2, simpleImageArr2 } from "../../helpers/otherDatas";
import SimpleThree from "./SimpleThree";
import { dataArr1 } from "../../helpers/otherDatas";

function SecondHome() {
  return (
    <Box>
      <SimpleGridFirstCards dataArr={dataArr1} />

      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <CommonUniqueSection
        heading={"Cricket Must -Haves"}
        array={sec1.el}
        sidePhoto={sec1.sideImg}
      />
      <SimpleGridFirstCards dataArr={dataArr2} />
      <SimpleGridSliderTwo arr={arr} simpleImageArr={simpleImageArr2} />
      <SimpleFourFlex arr={arr1} />
      <CommonUniqueSection
        heading={"Cricket Must -Haves"}
        array={sec1.el}
        sidePhoto={sec1.sideImg}
      />
      <SimpleGridSliderTwo arr={arr} simpleImageArr={simpleImageArr2} />
      <CommonUniqueSection
        heading={"Cricket Must -Haves"}
        array={sec1.el}
        sidePhoto={sec1.sideImg}
      />
      <SimpleGridFirstCards dataArr={dataArr1} />
      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <SimpleThree simpleImageArr={simpleImageArr2} />
      <SimpleGridSliderTwo arr={arr} simpleImageArr={simpleImageArr2} />
      <CommonCardSliders
        ImageSrcs={CommonSlidersCard}
        heading={"Smart Gadgets"}
      />
      <SimpleThree simpleImageArr={simpleImageArr2} />
    </Box>
  );
}

export default SecondHome;
