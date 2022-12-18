//

import React from "react";
import {
  Badge,
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Link,
  Square,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
// homepage assets**************

import appleBlueLiner from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_blue_liner.jpeg";
import apple_orange_strap from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_orange_strap.jpeg";
import Apple_SE_Sports_Fitness_Watche from "./homepage assets/homepage_product_slider/applePrice_drop_assets/Apple_SE_Sports_Fitness_Watche.jpeg";
import apple_static_image from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_static_image.webp";
import apple_white_tip from "./homepage assets/homepage_product_slider/applePrice_drop_assets/apple_white_tip.jpeg";
import ApplefitnessRedtip from "./homepage assets/homepage_product_slider/applePrice_drop_assets/ApplefitnessRedtip.jpeg";

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
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settings1 = {
  dots: true,
  arrows: false,
  //   fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settings2 = {
  dots: true,
  arrows: false,
  //   fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
};
const settings3 = {
  dots: true,
  arrows: false,
  //   fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const settings4 = {
  dots: true,
  arrows: false,
  //   fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const settings5 = {
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
const PriceDrop_appleSmartwatches_Array = [
  {
    title: "Apple Watch Ultra GPS + Cellular",
    apple_image: apple_orange_strap,
    deal_price: "₹85,405.00",
    m_r_p_price: "₹89,900",
    you_save: "5%(₹4,495)",
    available: true,
  },
  {
    title: "Apple Watch SE GPS + Cellular",
    apple_image: ApplefitnessRedtip,
    deal_price: "₹36,405.00",
    m_r_p_price: "₹37,900",
    you_save: "5%(₹1,895)",
    available: true,
  },
  {
    title: "Apple Watch Ultra GPS + Cellular",
    apple_image: appleBlueLiner,
    deal_price: "₹85,405.00",
    m_r_p_price: "₹89,900",
    you_save: "5%(₹4,495)",
    available: true,
  },
  {
    title: "Apple Watch Series 8 GPS",
    apple_image: apple_white_tip,
    deal_price: "₹45,405.00",
    m_r_p_price: "₹49,900",
    you_save: "5%(₹1,295)",
    available: true,
  },
  {
    title: "Apple SE Sports Fitness Watches",
    apple_image: Apple_SE_Sports_Fitness_Watche,
    deal_price: "₹85,405.00",
    m_r_p_price: "₹89,900",
    you_save: "5%(₹4,495)",
    available: true,
  },
  {
    title: "Apple Watch Ultra GPS + Cellular",
    apple_image: apple_orange_strap,
    deal_price: "₹85,405.00",
    m_r_p_price: "₹89,900",
    you_save: "5%(₹4,495)",
    available: true,
  },
  {
    title: "Apple Watch SE GPS + Cellular",
    apple_image: ApplefitnessRedtip,
    deal_price: "₹36,405.00",
    m_r_p_price: "₹37,900",
    you_save: "5%(₹1,895)",
    available: false,
  },
  {
    title: "Apple Watch Ultra GPS + Cellular",
    apple_image: appleBlueLiner,
    deal_price: "₹85,405.00",
    m_r_p_price: "₹89,900",
    you_save: "5%(₹4,495)",
    available: true,
  },
  {
    title: "Apple Watch Series 8 GPS",
    apple_image: apple_white_tip,
    deal_price: "₹45,405.00",
    m_r_p_price: "₹49,900",
    you_save: "5%(₹1,295)",
    available: false,
  },
  {
    title: "Apple SE Sports Fitness Watches",
    apple_image: Apple_SE_Sports_Fitness_Watche,
    deal_price: "₹85,405.00",
    m_r_p_price: "₹89,900",
    you_save: "5%(₹4,495)",
    available: true,
  },
];
// ₹
export default function PriceDrop_appleSmartwatches() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = PriceDrop_appleSmartwatches_Array;

  return (
    <Link to='/product'>
    <Box>
      <Text
        fontSize={"20px"}
        fontWeight="350"
        mt="5px"
        letterSpacing={"1px"}
        mb="15px"
      >
        PRICE DROP ON APPLE SMARTWATCHES{" "}
      </Text>
      <Box
        color="white"
        display={["block", "none", "none", "none", "none", "none"]}
      >
        <Square w="90%" m="auto">
          <Image
            src={apple_static_image}
            alt={apple_static_image}
            w="100%"
            h="100%"
          />
        </Square>

        <Box w="90%" bg="white" m="auto">
          <Box
            position={"relative"}
            height={"auto"}
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

            <Box w="100%" m="auto" h="auto" >
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((item, index) => (
                 
                  <Box key={item} w="24%" pl="20px" pt="10px" h="auto">
                    <Box w="90%" >
                      <Image
                        src={item.apple_image}
                        alt={item.apple_image}
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <Box
                      overflow={"wrap"}
                     
                      px="15px"
                      pb="15px"
                    >
                      <Text
                        color="rgb(0,51,128)"
                        _hover={{ color: "red", cursor: "pointer" }}
                      >
                        {item.title}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        Deal Price:{item.deal_price}
                      </Text>
                      <Text textDecoration={"line-through"} _hover={{ cursor: "pointer" }} color="black">
                        M.R.P Price:{item.m_r_p_price}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        You Save:{item.you_save}
                      </Text>
                      <Badge colorScheme={item.available ? "green" : "red"}>
                        {item.available ? "Offers Available" : "Offers Not Available"}
                      </Badge>
                    </Box>
                  </Box>
                  
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        display={["none", "flex", "none", "none", "none", "none"]}
      >
        <Square w="50%" m="auto">
          <Image
            src={apple_static_image}
            alt={apple_static_image}
            w="100%"
            h="100%"
          />
        </Square>

        <Box w="50%" bg="white" m="auto">
          <Box
            position={"relative"}
            height={"auto"}
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

            <Box w="100%" m="auto" h="auto" >
              <Slider {...settings1} ref={(slider) => setSlider(slider)}>
                {cards.map((item, index) => (
                  <Box key={item} w="24%" pl="20px" pt="10px" h="auto">
                    <Box w="90%" >
                      <Image
                        src={item.apple_image}
                        alt={item.apple_image}
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <Box
                      overflow={"wrap"}
                     
                      px="15px"
                      pb="15px"
                    >
                      <Text
                        color="rgb(0,51,128)"
                        _hover={{ color: "red", cursor: "pointer" }}
                      >
                        {item.title}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        Deal Price:{item.deal_price}
                      </Text>
                      <Text textDecoration={"line-through"} _hover={{ cursor: "pointer" }} color="black">
                        M.R.P Price:{item.m_r_p_price}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        You Save:{item.you_save}
                      </Text>
                      <Badge colorScheme={item.available ? "green" : "red"}>
                        {item.available ? "Offers Available" : "Offers Not Available"}
                      </Badge>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        display={["none", "none", "none","flex",  "none", "none"]}
      >
        <Square w="25%" m="auto">
          <Image
            src={apple_static_image}
            alt={apple_static_image}
            w="100%"
            h="100%"
          />
        </Square>

        <Box w="75%" bg="white" m="auto">
          <Box
            position={"relative"}
            height={"auto"}
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

            <Box w="100%" m="auto" h="auto" >
              <Slider {...settings3} ref={(slider) => setSlider(slider)}>
                {cards.map((item, index) => (
                  <Box key={item} w="24%" pl="20px" pt="10px" h="auto">
                    <Box w="90%" >
                      <Image
                        src={item.apple_image}
                        alt={item.apple_image}
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <Box
                      overflow={"wrap"}
                     
                      px="15px"
                      pb="15px"
                    >
                      <Text
                        color="rgb(0,51,128)"
                        _hover={{ color: "red", cursor: "pointer" }}
                      >
                        {item.title}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        Deal Price:{item.deal_price}
                      </Text>
                      <Text textDecoration={"line-through"} _hover={{ cursor: "pointer" }} color="black">
                        M.R.P Price:{item.m_r_p_price}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        You Save:{item.you_save}
                      </Text>
                      <Badge colorScheme={item.available ? "green" : "red"}>
                        {item.available ? "Offers Available" : "Offers Not Available"}
                      </Badge>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        display={["none", "none", "none", "none", "flex", "none"]}
      >
        <Square w="25%" m="auto">
          <Image
            src={apple_static_image}
            alt={apple_static_image}
            w="100%"
            h="100%"
          />
        </Square>

        <Box w="75%" bg="white" m="auto">
          <Box
            position={"relative"}
            height={"auto"}
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

            <Box w="100%" m="auto" h="auto" >
              <Slider {...settings4} ref={(slider) => setSlider(slider)}>
                {cards.map((item, index) => (
                  <Box key={item} w="24%" pl="20px" pt="10px" h="auto">
                    <Box w="90%" >
                      <Image
                        src={item.apple_image}
                        alt={item.apple_image}
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <Box
                      overflow={"wrap"}
                     
                      px="15px"
                      pb="15px"
                    >
                      <Text
                        color="rgb(0,51,128)"
                        _hover={{ color: "red", cursor: "pointer" }}
                      >
                        {item.title}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        Deal Price:{item.deal_price}
                      </Text>
                      <Text textDecoration={"line-through"} _hover={{ cursor: "pointer" }} color="black">
                        M.R.P Price:{item.m_r_p_price}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        You Save:{item.you_save}
                      </Text>
                      <Badge colorScheme={item.available ? "green" : "red"}>
                        {item.available ? "Offers Available" : "Offers Not Available"}
                      </Badge>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        display={["none", "none",  "none", "none", "none","flex"]}
      >
        <Square w="25%" m="auto">
          <Image
            src={apple_static_image}
            alt={apple_static_image}
            w="100%"
            h="100%"
          />
        </Square>

        <Box w="75%" bg="white" m="auto">
          <Box
            position={"relative"}
            height={"auto"}
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

            <Box w="100%" m="auto" h="auto" >
              <Slider {...settings5} ref={(slider) => setSlider(slider)}>
                {cards.map((item, index) => (
                  <Box key={item} w="24%" pl="20px" pt="10px" h="auto">
                    <Box w="90%" >
                      <Image
                        src={item.apple_image}
                        alt={item.apple_image}
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <Box
                      overflow={"wrap"}
                     
                      px="15px"
                      pb="15px"
                    >
                      <Text
                        color="rgb(0,51,128)"
                        _hover={{ color: "red", cursor: "pointer" }}
                      >
                        {item.title}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        Deal Price:{item.deal_price}
                      </Text>
                      <Text textDecoration={"line-through"} _hover={{ cursor: "pointer" }} color="black">
                        M.R.P Price:{item.m_r_p_price}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        You Save:{item.you_save}
                      </Text>
                      <Badge colorScheme={item.available ? "green" : "red"}>
                        {item.available ? "Offers Available" : "Offers Not Available"}
                      </Badge>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        color="white"
        display={["none", "none", "flex", "none", "none", "none"]}
      >
        <Square w="25%" m="auto">
          <Image
            src={apple_static_image}
            alt={apple_static_image}
            w="100%"
            h="100%"
          />
        </Square>

        <Box w="75%" bg="white" m="auto">
          <Box
            position={"relative"}
            height={"auto"}
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

            <Box w="100%" m="auto" h="auto" >
              <Slider {...settings2} ref={(slider) => setSlider(slider)}>
                {cards.map((item, index) => (
                  <Box key={item} w="24%" pl="20px" pt="10px" h="auto">
                    <Box w="90%" >
                      <Image
                        src={item.apple_image}
                        alt={item.apple_image}
                        w="100%"
                        h="100%"
                      />
                    </Box>
                    <Box
                      overflow={"wrap"}
                     
                      px="15px"
                      pb="15px"
                    >
                      <Text
                        color="rgb(0,51,128)"
                        _hover={{ color: "red", cursor: "pointer" }}
                      >
                        {item.title}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        Deal Price:{item.deal_price}
                      </Text>
                      <Text textDecoration={"line-through"} _hover={{ cursor: "pointer" }} color="black">
                        M.R.P Price:{item.m_r_p_price}
                      </Text>
                      <Text _hover={{ cursor: "pointer" }} color="black">
                        You Save:{item.you_save}
                      </Text>
                      <Badge colorScheme={item.available ? "green" : "red"}>
                        {item.available ? "Offers Available" : "Offers Not Available"}
                      </Badge>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </Link>
  );
}
