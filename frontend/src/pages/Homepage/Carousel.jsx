import React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import {Link} from "react-router-dom"
// homepage assets**************
import AppleImage from "./homepage assets/productSlider_Homepage_1/Apple_S8.webp";
import LaptopImage from "./homepage assets/productSlider_Homepage_1/Laptop-Carnival-Carousel-Banner-D.webp";
import AccessoriesFiesta from "./homepage assets/productSlider_Homepage_1/Accessories-Fiesta-Carousel-Banner-D.webp";
import MotoG4 from "./homepage assets/productSlider_Homepage_1/Moto-G42-Carousel-Banner-main1.webp";
import SamsumgImage from "./homepage assets/productSlider_Homepage_1/SamsumImage_carousel.webp";
import MacBookBanner from "./homepage assets/productSlider_Homepage_1/MacBook-Carousel-Banner-14-12-2022.webp";
import MonitorBanner from "./homepage assets/productSlider_Homepage_1/Monitors-Carousel-Banner-02-12-2022.webp";
import SmartwatchBanner from "./homepage assets/productSlider_Homepage_1/Smartwatch-Carnival-Carousel-Banner-D.webp";
import winterSaleBanner from "./homepage assets/productSlider_Homepage_1/Winter-Sale-Carousel-Banner-2022.webp";
import EntertainmentFest from "./homepage assets/productSlider_Homepage_1/Entertainment-Fest-Carousel-Banner-08-D.jpg";

// homepage assets**************


// icons import*******************
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

// icons import*******************
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 1,
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
  const cards = [AppleImage, LaptopImage, SamsumgImage, MotoG4,AccessoriesFiesta,EntertainmentFest,MonitorBanner,MacBookBanner,SmartwatchBanner,winterSaleBanner];

  return (
    <Box>
     <Link to="/product"> <Box position={"relative"} height={"auto"} overflow={"hidden"} m="auto">
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
            display={["none","none","none","none","none","none"]}
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
            display={["none","none","none","none","none","none"]}
            alignItems={"center"}
            border="1px"
            borderColor={"rgb(0, 170, 255)"}
          >
            <MdArrowForwardIos size={"25px"} color={"black"} />
          </Box>
        </IconButton>
        {/* Slider */}
        <Box w="100%" m="auto" h="100%">
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((item, index) => (
              <Box key={item} w="100%" h="auto">
                <Image src={item} alt={item} w="100%" h="100%" />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      </Link>
    </Box>
  );
}
