//

import React from "react";
import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
// homepage assets**************

import appleBlueLiner from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_blue_liner.jpeg"
import apple_orange_strap from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_orange_strap.jpeg"
import Apple_SE_Sports_Fitness_Watche from "./homepage assets/homepage_product_slider/applePrice_drop_assets/Apple_SE_Sports_Fitness_Watche.jpeg"
// import apple_static_image from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_static_image.jpeg"
import apple_white_tip from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_white_tip.jpeg"
import ApplefitnessRedtip from "./homepage assets/homepage_product_slider/applePrice_drop_assets/ApplefitnessRedtip.jpeg"

// homepage assets**************

// icons import*******************
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

// icons import*******************
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
//   fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const PriceDrop_appleSmartwatches_Array=[
{

}
]
export default function PriceDrop_appleSmartwatches() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [appleBlueLiner,apple_orange_strap,Apple_SE_Sports_Fitness_Watche,apple_white_tip,ApplefitnessRedtip];

  return (
    <Box>
           <Flex color="white">
          <Center w="30%" bg="green.500">
            <Text>Box 1</Text>
          </Center>

          <Box w="75%" bg="tomato">
      <Box position={"relative"} height={"auto"} overflow={"hidden"} m="auto">
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="transparent"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <Box
            height={"100px"}
            w="40px"
            ml="-15px"
            backgroundColor={"rgb(202,233,248)"}
            display={["none", "none", "none", "none", "flex", "flex"]}
            alignItems={"center"}
            border="1px"
            borderColor={"rgb(0, 170, 255)"}
          >
            <MdArrowBackIosNew size={"25px"} color={"black"} />
          </Box>
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="transparent"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <Box
            height={"100px"}
            w="40px"
            mr="-15px"
            backgroundColor={"rgb(202,233,248)"}
            display={["none", "none", "none", "none", "flex", "flex"]}
            alignItems={"center"}
            border="1px"
            borderColor={"rgb(0, 170, 255)"}
          >
            <MdArrowForwardIos size={"25px"} color={"black"} />
          </Box>
        </IconButton>
        {/* Slider */}
     
            <Box w="100%" m="auto" h="auto">
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((item, index) => (
                  <Box key={item} w="24%" h="auto">
                    <Image src={item} alt={item} w="100%" h="100%" />
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
      </Box>
        </Flex>
    </Box>
  );
}
