import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import "./Navbar.css";

// icons import******************
import { MdLocationPin } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { BiChevronDown } from "react-icons/bi";

// icons import******************

// assets import******************
import MainLogo from "./navbar_assets/main_logo.png";

// assets import******************

import { FrontendContext } from "../../context/Frontend_context";



const Main_menu_dropdown_array_navbar = [{
    "id": 1,
    "title": "Smartphones"
}, {
    "id": 2,
    "title": "Wearable Technology",
    "options": [{ "optionsID": 1, "title": "Top Selling Smartwatches" }, { "optionsID": 2, "title": "Apple Price Drop" }]
}, {
    "id": 3,
    "title": "Accessories",
    "options": [{ "optionsID": 1, "title": "Tablet Accessories" }, { "optionsID": 2, "title": "Mobile Accessories" }, { "optionsID": 3, "title": "Mobile Grips & Stands" }, { "optionsID": 4, "title": "Car Mobile Holders" }, { "optionsID": 5, "title": "Memory Cards" }, { "optionsID": 6, "title": "Cables & Cords" }, { "optionsID": 7, "title": "Chargers & Adapters" }]
}, {
    "id": 4,
    "title": "Headphones & Headsets",
}, {
    "id": 5,
    "title": "Tablets & eReaders",
    "options": [{ "optionsID": 1, "title": "Premium Tablets, Above 15001" }, { "optionsID": 2, "title": "Every Day use Tablets below 15000" }]
}, {
    "id": 6,
    "title": "Power Banks",
}, {
    "id": 7,
    "title": "eSlates",
}, {
    "id": 8,
    "title": "AI Learning Robots",
}]


const Navbar = () => {
  const contexts = useContext(FrontendContext);
  console.log("contexts:", contexts);
  const {
    main_red_color,
    main_blue_color,
    Main_menu_array_navbar,
    Main_menu_dropdown_array_navbar,
    main_menu_dropdown_blue_color,
  } = contexts;

  console.log("Main_menu_array_navbar:", Main_menu_array_navbar);
  console.log(
    "Main_menu_dropdown_array_navbar:",
    Main_menu_dropdown_array_navbar
  );
  const [styleMoblie_and_tablets, setStyleMoblie_and_tablets] =
    useState("none");
  const [style_television, setStyle_Television] = useState("none");
  const [style_audio, setStyle_audio] = useState("none");
  const [style_home_appliances, setStyle_home_appliances] = useState("none");
  const [style_computers, setStyle_computers] = useState("none");
  const [style_camaras, setStyle_camaras] = useState("none");
  const [style_kitchen_appliances, setStyle_kitchen_appliances] =
    useState("none");
  const [style_personal_Care, setStyle_personal_Care] = useState("none");
  const [style_accessories, setStyle_accessories] = useState("none");

  return (
    <div>
      <Flex
        bgColor={main_red_color}
        color={"white"}
        display={["none", "none", "none", "none", "flex", "flex"]}
        h="30px"
        pr="20px"
        alignItems={"center"}
      >
        <Box flex="1" bg="rgb(228,37,41)" h="25px"></Box>
        <Center w="110px" bg={main_red_color}>
          <MdLocationPin color="white" size={"20px"} />
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            _hover={{ cursor: "pointer" }}
          >
            Find a store
          </Text>
        </Center>

        <Center height="20px">
          <Divider orientation="vertical" />
        </Center>

        <Center w="110px" bg="rgb(228,37,41)">
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            _hover={{ cursor: "pointer" }}
          >
            Buying guides
          </Text>
        </Center>

        <Center height="20px">
          <Divider orientation="vertical" />
        </Center>

        <Center w="80px" bg="rgb(228,37,41)">
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            _hover={{ cursor: "pointer" }}
          >
            Contact us
          </Text>
        </Center>
      </Flex>

      <Flex
        bgColor={main_red_color}
        color={"white"}
        display={["none", "none", "none", "none", "flex", "flex"]}
        h="75px"
        pr="20px"
        alignItems={"center"}
      >
        {/* <Box 
         display={[ "flex", "flex","none", "none", "none", "none"]}
         
        bg="rgb(228,37,41)"
         h="auto">
            hihihiidfsdfd
         </Box> */}

        <Box w="180px" ml="50px" bg="rgb(228,37,41)" h="60px">
          <Image src={MainLogo} alt={MainLogo} width="100%" height={"100%"} />
        </Box>

        <Box
          flex="0.7"
          bg="rgb(228,37,41)"
          //  bg="white"
          margin={"auto"}
          h="auto"
        >
          <InputGroup bgColor={"rgb(255,255,255)"} borderRadius="40px">
            {/* <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            /> */}
            <Input
              placeholder="Find your favorite products"
              color={"rgb(117,117,117)"}
              fontWeight="400"
            />
            <InputRightElement
              children={<ImSearch color="rgb(187,187,187)" />}
            />
          </InputGroup>
        </Box>
        <Center w="150px" bg={main_red_color}>
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            _hover={{ cursor: "pointer" }}
          >
            Select your PIN Code
          </Text>
        </Center>
        <Center height="20px">
          <Divider orientation="vertical" />
        </Center>
        <Center w="80px" bg="rgb(228,37,41)" gap={"5px"}>
          <ImCart color="white" size={"15px"} />

          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            _hover={{ cursor: "pointer" }}
          >
            Cart
          </Text>
        </Center>
        <Center height="20px">
          <Divider orientation="vertical" />
        </Center>
        <Center w="70px" bg="rgb(228,37,41)" gap={"5px"}>
          <FaUser color="white" size={"15px"} />
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            _hover={{ cursor: "pointer" }}
          >
            Login
          </Text>
        </Center>
      </Flex>
      <Flex
        color="white"
        bgColor={main_blue_color}
        display={["none", "none", "none", "none", "flex", "flex"]}
        h="35px"
        alignItems={"center"}
        px="20px"
        pos={"relative"}
      >
        {/* {Main_menu_array_navbar.map((item) => ( */}
        <Box
          flex="1"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
          onMouseEnter={(e) => {
            setStyleMoblie_and_tablets("flex");
          }}
          onMouseLeave={(e) => {
            setStyleMoblie_and_tablets("none");
          }}
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[0].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[1].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[2].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[3].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[4].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[5].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[6].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[7].title}
          </Text>
          <BiChevronDown />
        </Box>
        <Box
          flex="1"
          pos={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ backgroundColor: main_red_color, cursor: "pointer" }}
          h="100%"
        >
          <Text fontSize={"12px"} fontWeight="500">
            {Main_menu_array_navbar[8].title}
          </Text>
          <BiChevronDown />
        </Box>
        {/* ))} */}
      </Flex>
      <Flex
        h="400px"
        pos={"absolute"}
        ml="2.5%"
        w="95%"
        display={styleMoblie_and_tablets}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyleMoblie_and_tablets("flex");
        }}
        onMouseLeave={(e) => {
          setStyleMoblie_and_tablets("none");
        }}
      >
        <Flex>
            <HStack>
                <VStack>
                    <Text>Smartphones</Text>
                </VStack>
                <VStack></VStack>
                <VStack></VStack>
            </HStack>
        </Flex>
        <Box flex={"1"}></Box>
      </Flex>
      {/* <Box bgColor={main_red_color} w={"100%"} h="4px" ></Box> */}
    </div>
  );
};

export default Navbar;
