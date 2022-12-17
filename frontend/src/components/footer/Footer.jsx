import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FrontendContext } from "../../context/FrontendContext";
import "./Footer.css";

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import Google_Store_Badge from "./footer assests/google_play_badge.png";
import Apple_Store_Badge from "./footer assests/apple-store-badge.png";

const Footer = () => {
  const contexts = useContext(FrontendContext);
  const { main_blue_color } = contexts;
  console.log("contexts:", contexts);
  return (
    <div>
      <Flex
        bgColor={main_blue_color}
        h="auto"
        display={["block", "block", "block", "block", "flex", "flex"]}
        justifyContent="space-around"
        px="45px"
        py="30px"
      >
        <Flex flex="1" justifyContent="flex-start">
          <Box flex="1">
            <Text
              fontSize={"14.5px"}
              mb="5px"
              fontWeight="700"
              color="white"
              alignSelf={"start"}
            >
              PRODUCT CATEGORES
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Smartphones
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Laptops
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              DSLR Cameras
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Televisions
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Air Conditioners
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Refrigerators
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Kitchen Appliances
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Personal Care & Grooming
            </Text>
          </Box>
          <Box flex="1">
            <Text
              fontSize={"14.5px"}
              mb="5px"
              fontWeight="700"
              color="white"
              alignSelf={"start"}
            >
              SITE INFO
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              About Reliance Digital
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              resQ Services
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Site Map
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Gift Cards
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Corporate Enquires
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Contact Us
            </Text>
          </Box>
        </Flex>
        <Flex flex="1" justifyContent="flex-start">
          <Box flex="1">
            <Text
              fontSize={"14.5px"}
              mb="5px"
              fontWeight="700"
              color="white"
              alignSelf={"start"}
            >
              RESOURCE CENTRE
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Product Reviews
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Buying Guides
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              How Tos
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Featured Stories
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Event & Happenings
            </Text>
          </Box>
          <Box flex="1">
            <Text
              fontSize={"14.5px"}
              mb="5px"
              fontWeight="700"
              color="white"
              alignSelf={"start"}
            >
              POLICIES
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Terms of Use
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              FAQs
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Cancellation and Return Policy
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Pricing and Payments Policy
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Shipping and Delivery Policy
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Privacy Policy
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              E-waste Recycling Policy
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              EMI and Additional Cashback T&C
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              RelianceOne Loyalty Program T&C
            </Text>
            <Text
              color="white"
              fontSize={"13.5px"}
              _hover={{
                fontSize: "14.5px",
                cursor: "pointer",
                color: "rgb(139,167,193)",
              }}
            >
              Caution Notice
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        bgColor={main_blue_color}
        h="auto"
        display={["block", "block", "block", "block", "flex", "flex"]}
        justifyContent="flex-start"
        px="45px"
        py="20px"
      >
        <Flex justifyContent={"flex-start"}>
          <Box
            mb="20px"
            w={["140px", "140px", "140px", "140px", "300px", "300px"]}
          >
            <Text fontSize={"15px"} fontWeight="700" color="white">
              FOLLOW US
            </Text>
            <Box color="white" display="flex" gap="10px">
              <Box w="20px">
                <Box
                  w="20px"
                  _hover={{
                    w: "19px",
                    cursor: "pointer",
                    color: "rgb(139,167,193)",
                  }}
                >
                  <AiFillFacebook size={"100%"} />
                </Box>
              </Box>
              <Box w="20px">
                <Box
                  w="20px"
                  _hover={{
                    w: "19px",
                    cursor: "pointer",
                    color: "rgb(139,167,193)",
                  }}
                >
                  <AiOutlineTwitter size={"100%"} />
                </Box>
              </Box>
              <Box w="20px">
                <Box
                  w="20px"
                  _hover={{
                    w: "19px",
                    cursor: "pointer",
                    color: "rgb(139,167,193)",
                  }}
                >
                  <TfiYoutube size={"100%"} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Flex justifyContent={"flex-start"}>
          <Box>
            <Text fontSize={"15px"} fontWeight="700" color="white" mb="15px" >
              EXPERIENCE DIGITAL INDIA APP ON MOBILE
            </Text>
            <Box display={"flex"} w="250px" justifyContent={"space-between"}>
              <Image
                src={Google_Store_Badge}
                alt={Google_Store_Badge}
                w="120px"
                h="43px"
                _hover={{cursor:"pointer"}}
              />
              <Image
                src={Apple_Store_Badge}
                alt={Apple_Store_Badge}
                w="120px"
                h="43px"
                _hover={{cursor:"pointer"}}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box
        color="white"
        bgColor="rgb(10,36,74)"
        pt="25px"
        px="20px"
        justifyContent={"center"}
        display={["none", "none", "none", "none", "flex", "flex"]}
      >
        <Box textAlign={"center"}>
          <Text fontSize={"14px"} fontWeight="500" textDecoration={"underline"}>
            Disclaimer
          </Text>
        </Box>
        <Box>
          <Text></Text>
        </Box>
      </Box>
      <Box
        color="white"
        bgColor="rgb(10,36,74)"
        py="25px"
        px="40px"
        justifyContent={"center"}
        display={["none", "none", "none", "none", "flex", "flex"]}
      >
        <Box textAlign={"center"}>
          <Text fontSize={"15px"} fontWeight="400">
            Product prices, offers and availability are subject to change from
            time to time. All prices are inclusive of taxes. Product colours &
            images are only for illustration and they may not exactly match with
            the actual product. Product specs are subject to change & may vary
            from actual product. While every care is taken to avoid inaccuracies
            in content, these are provided as is, without warranty of any kind.
          </Text>
        </Box>
      </Box>
      <Divider orientation="horizontal" color="black" />
      <Box
        color="white"
        bgColor="rgb(10,36,74)"
        w={"100%"}
        py="10px"
        px="20px"
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
      >
        <Text>© 2022 Reliance Digital. All Rights Reserved.</Text>
      </Box>
    </div>
  );
};

export default Footer;
