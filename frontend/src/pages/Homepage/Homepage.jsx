import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Carousel from "./Carousel";
import "./Homepage.css";

// asssets **************
import AdImage_One from "./homepage assets/productSlider_Homepage_1/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.webp";
import Apple_Carousel from "./Apple_Carousel";
import PriceDrop_appleSmartwatches from "./PriceDrop_appleSmartwatches";

// asssets **************
const Homepage = () => {
  useEffect(() => {
    document.title =
      "Online Electronic Shopping Store in India - Reliance Digital";
  }, []);
  return (
    <div>
      <Box w="100%" height={"auto"}>
        <Image src={AdImage_One} alt={AdImage_One} w="100%" />
      </Box>
      <Carousel />
      <PriceDrop_appleSmartwatches/>
      <Apple_Carousel/>
    </div>
  );
};

export default Homepage;
