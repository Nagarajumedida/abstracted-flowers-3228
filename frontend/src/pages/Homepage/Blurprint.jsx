import React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import AppleImage from "./homepage assets/Apple-S8-CLP-Banner-carousel_slider1.webp";
import LaptopImage from "./homepage assets/Laptop-Carnival-Carousel-Banner-D.webp";
import MotoG4 from "./homepage assets/Moto-G42-Carousel-Banner-main1.webp";
import SamsumgImage from "./homepage assets/Samsung-Thursdays-Carousel-Banner-02-11-2022.webp";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [AppleImage, LaptopImage, SamsumgImage, MotoG4];

  return (
    <Box  >

    <Box
    border="2px" borderColor={"yellow"}
      position={"relative"}
      height={"300px"}
      
      overflow={"hidden"}
      m="auto"
    >
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
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        >
        <BiLeftArrowAlt />
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
        <BiRightArrowAlt color={"gray"} />
      </IconButton>
      {/* Slider */}
      <Box w="90%" m="auto" h="100%" border="2px" borderColor={"blue"}>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((item, index) => (
            <Box w="300px" h="250px" border="2px" borderColor={"red"} >
              <Image src={item} alt={item} w="300px" h="100%" border="2px" borderColor={"red"}  />
          </Box>
        ))}
      </Slider>
        </Box>
    </Box>
        </Box>
  );
}
