import {
  Accordion,
  AccordionButton,
  
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
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
import { GiHamburgerMenu } from "react-icons/gi";
import { GiPlug } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";

import { FaHeadphones } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaUsb } from "react-icons/fa";
import { MdTabletMac } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import {Link} from "react-router-dom"

// icons import******************

// assets import******************
import MainLogo from "./navbar_assets/main_logo.png";
import SmartPhonesAndWearables from "./navbar_assets/smartphones_menu_image.png";
import laptops_menu_image from "./navbar_assets/laptops_menu_image.png";
import personal_grooming_image from "./navbar_assets/personal_grooming_image.png";

// assets import******************

import { FrontendContext } from "../../context/FrontendContext";

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  // pos="sticky" top={"0px"} zIndex="27"
  return (
    <div style={{position:"sticky",top:"0px",zIndex:"27" }}>
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
        <Link to="/"><Box w="180px" ml="50px" bg="rgb(228,37,41)" h="60px">
          <Image src={MainLogo} alt={MainLogo} width="100%" height={"100%"} />
        </Box></Link>

        <Box
          flex="0.7"
          bg="rgb(228,37,41)"
          //  bg="white"
          margin={"auto"}
          h="auto"
        >
          <InputGroup bgColor={"rgb(255,255,255)"} borderRadius="40px">
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
          <Link to="/login">
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            _hover={{ cursor: "pointer" }}
          >
            Login
          </Text>
          </Link>
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
          onMouseEnter={(e) => {
            setStyle_Television("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_Television("none");
          }}
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
          onMouseEnter={(e) => {
            setStyle_audio("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_audio("none");
          }}
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
          onMouseEnter={(e) => {
            setStyle_home_appliances("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_home_appliances("none");
          }}
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
          onMouseEnter={(e) => {
            setStyle_computers("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_computers("none");
          }}
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
          onMouseEnter={(e) => {
            setStyle_camaras("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_camaras("none");
          }}
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
          onMouseEnter={(e) => {
            setStyle_kitchen_appliances("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_kitchen_appliances("none");
          }}
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
          onMouseEnter={(e) => {
            setStyle_personal_Care("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_personal_Care("none");
          }}
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
          onMouseEnter={(e) => {
            setStyle_accessories("flex");
          }}
          onMouseLeave={(e) => {
            setStyle_accessories("none");
          }}
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
        zIndex={500}
        border={"1px"}
        borderColor={main_blue_color}
        display={styleMoblie_and_tablets}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyleMoblie_and_tablets("flex");
        }}
        onMouseLeave={(e) => {
          setStyleMoblie_and_tablets("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="200px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Smartphones
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Wearable Technology
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Top Selling Smartwatches
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Apple Price Drop
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Tablet Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Mobile Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Mobile Grips & Stands
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Car Mobile Holders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Memory Cards
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Cables & Cords
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Chargers & Adapters
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Headphones & Headsets
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Tablets & eReaders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Premium Tablets, Above 15001
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Every Day use Tablets below 15000
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Power Banks
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                AI Learning Robots
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"1"}>
          <Image
            src={SmartPhonesAndWearables}
            alt={SmartPhonesAndWearables}
            h="100%"
            w="100%"
          />
        </Box>
      </Flex>
      <Flex
        h="200px"
        zIndex={500}
        pos={"absolute"}
        ml="2.5%"
        w="95%"
        border={"1px"}
        borderColor={main_blue_color}
        display={style_television}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_Television("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_Television("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="120px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Televisions
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Smart TVs
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                32 Inch TVs
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                43 Inch TVs
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                55 Inch TVs
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Android TVs
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Gaming
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Gaming Consoles
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Gaming Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Gaming Titles
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Projectors
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Streaming Devices
              </Text>
            </VStack>

            <VStack w="400px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Reconnect Disney | Marvel Audio Collection
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                TV & Audio Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Virtual Reality Headsets
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Stabilizers & Surge Protectors
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"0.5"}>
          {/* <Image src={SmartPhonesAndWearables} alt={SmartPhonesAndWearables} h="100%" w="100%" /> */}
        </Box>
      </Flex>
      <Flex
        h="200px"
        zIndex={500}
        pos={"absolute"}
        ml="2.5%"
        w="95%"
        border={"1px"}
        borderColor={main_blue_color}
        display={style_audio}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_audio("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_audio("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="220px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Headphones & Headsets
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                True Wireless
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Bluetooth Neckbands
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Wired Earphones
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                On Ear Headphones
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Noise Cancelling Headphones
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Bluetooth & WiFi Speakers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Bluetooth Speakers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Smart Speakers
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                TV Speakers & Soundbars
              </Text>

              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Soundbars
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Home Theatre Systems
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Party speakers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Multimedia
              </Text>
            </VStack>
            <VStack w="400px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Musical Instruments
              </Text>

              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Guitars and Ukuleles
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Microphones
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Musical Keyboards
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"0.5"}>
          {/* <Image src={SmartPhonesAndWearables} alt={SmartPhonesAndWearables} h="100%" w="100%" /> */}
        </Box>
      </Flex>
      <Flex
        h="320px"
        pos={"absolute"}
        ml="2.5%"
        w="95%" zIndex={500}
        border={"1px"}
        borderColor={main_blue_color}
        display={style_home_appliances}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_home_appliances("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_home_appliances("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="220px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Split Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Window Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Smart Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Energy Efficient Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                1 ton Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                1.5 ton Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                5 star Air Conditioners
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Air Coolers
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Air Purifiers
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Washing Machines
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Fully Automatic Front Load
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Fully Automatic Top Load
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Semi-Automatic Top Load
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Refrigerators
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Single Door
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Double Door
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Side by Side Refrigerators
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Convertible
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Vacuum Cleaners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Robotic Vacuum Cleaners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Dishwashers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Fans
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Cloth Dryers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Geysers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Dishwashers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Room Heaters
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"0.5"}>
          {/* <Image src={SmartPhonesAndWearables} alt={SmartPhonesAndWearables} h="100%" w="100%" /> */}
        </Box>
      </Flex>
      <Flex
        h="320px"
        pos={"absolute"}
        ml="2.5%"
        w="95%" zIndex={500}
        border={"1px"}
        borderColor={main_blue_color}
        display={style_home_appliances}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_home_appliances("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_home_appliances("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="220px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Split Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Window Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Smart Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Energy Efficient Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                1 ton Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                1.5 ton Air Conditioners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                5 star Air Conditioners
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Air Coolers
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Air Purifiers
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Washing Machines
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Fully Automatic Front Load
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Fully Automatic Top Load
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Semi-Automatic Top Load
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Refrigerators
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Single Door
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Double Door
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Side by Side Refrigerators
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Convertible
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Vacuum Cleaners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Robotic Vacuum Cleaners
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Dishwashers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Fans
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Cloth Dryers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Geysers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Dishwashers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Room Heaters
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"0.5"}>
          {/* <Image src={SmartPhonesAndWearables} alt={SmartPhonesAndWearables} h="100%" w="100%" /> */}
        </Box>
      </Flex>
      <Flex
        h="460px"
        pos={"absolute"}
        ml="2.5%"
        w="95%"
        zIndex={500}
        border={"1px"}
        borderColor={main_blue_color}
        display={style_computers}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_computers("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_computers("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="220px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Laptops
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Basic use laptops
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Student Laptops
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Thin and light Laptops
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Multi-Tasking Laptops
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Gaming Laptops
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Content creator Laptops
              </Text>

              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Computer Monitors
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Desktops & All-In-Ones
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Bluetooth & WiFi Speakers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Internet Connectivity Devices
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Routers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                WiFi Range Extenders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Wireless USB Adapters
              </Text>

              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Printers & Inks
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Printers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Toners & Ink Cartridges
              </Text>

              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Data Storage Devices
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Memory Cards
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Memory Cards
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Pen Drives & OTG Drives
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Hard Disks & SSD
              </Text>
            </VStack>

            <VStack w="300px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Computer Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Upto 72% Off, Only on Reliancedigital.in
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Computer Networking Cables
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Laptop Chargers & Adaptor
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Laptop Batteries
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Hubs & Docks
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Laptop Bags & Sleeves
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Laptop Cooling Pad
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Laptop Screen Protectors
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Laptop Tables & Stands
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Mouse Pads
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Input Devices
              </Text>

              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Keyboards
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Computer Mouse
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Stylus Pens
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"1"}>
          <Image
            src={laptops_menu_image}
            alt={laptops_menu_image}
            h="100%"
            w="100%"
          />
        </Box>
      </Flex>
      <Flex
        h="260px" zIndex={500}
        pos={"absolute"}
        ml="2.5%"
        w="95%"
        border={"1px"}
        borderColor={main_blue_color}
        display={style_camaras}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_camaras("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_camaras("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="220px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                DSLR Cameras
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Mirrorless Cameras
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Point & Shoot Cameras
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                ProSumer Cameras
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Action Cameras
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Photo Storage Devices
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Memory Cards
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Pen Drives
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Binoculars
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Camera Lens
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Digital Camera Accessoriess
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Camera Batteries & Chargers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Camera bags & cases
              </Text>

              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Tripods & Monopods
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Action Camera Accessories
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"1"}>
          {/* <Image src={laptops_menu_image} alt={laptops_menu_image} h="100%" w="100%" /> */}
        </Box>
      </Flex>
      <Flex
        h="320px"
        pos={"absolute"}
        ml="2.5%"
        w="95%"
        zIndex={500}
        border={"1px"}
        borderColor={main_blue_color}
        display={style_kitchen_appliances}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_camaras("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_camaras("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="220px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Microwave Ovens
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Water Purifiers
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Fruits and Vegetable Cleaner
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Oven Toaster Grillers (OTG)
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Cookwares
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Juicer Mixer Grinders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Juicers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Hand Mixers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Mixer Grinders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Choppers & Slicers
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Induction Cookers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Food Processors
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Blenders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Kitchen Hobs & Gas Stoves
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Kitchen Chimneys
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Rice Cookers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Sandwich Makers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Popup Toasters
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Coffee Makers & Grinders
              </Text>
            </VStack>
            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Reconnect Disney|Marvel Kitchen Collection
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Air Fryers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Specialty Appliances
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Electric Kettles
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Water Dispensers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Wet Grinders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Flour Mills
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"1"}>
          {/* <Image src={laptops_menu_image} alt={laptops_menu_image} h="100%" w="100%" /> */}
        </Box>
      </Flex>
      <Flex
        h="230px"
        pos={"absolute"}
        ml="2.5%" zIndex={500}
        w="95%"
        border={"1px"}
        borderColor={main_blue_color}
        display={style_personal_Care}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyle_personal_Care("flex");
        }}
        onMouseLeave={(e) => {
          setStyle_personal_Care("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="220px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Shavers & Trimmers
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Epilators
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Hair Dryers & Stylers
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Weighing Scales
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Irons
              </Text>
            </VStack>

            <VStack w="350px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Hygiene & Personal Care
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Reconnect Disney|Marvel Grooming Collection
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Digital Thermometers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Massagers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Misc. Care Devices
              </Text>

              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Garment Steamers
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Action Camera Accessories
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"1"}>
          <Image
            src={personal_grooming_image}
            alt={personal_grooming_image}
            h="100%"
            w="100%"
          />
        </Box>
      </Flex>
      <Flex
        h="400px"
        pos={"absolute"}
        ml="2.5%"
        w="95%" zIndex={500}
        border={"1px"}
        borderColor={main_blue_color}
        display={style_accessories}
        bgColor={main_menu_dropdown_blue_color}
        onMouseEnter={(e) => {
          setStyleMoblie_and_tablets("flex");
        }}
        onMouseLeave={(e) => {
          setStyleMoblie_and_tablets("none");
        }}
      >
        <Flex flex={"1"} pt="5px">
          <HStack pl="3%">
            <VStack w="200px" h="100%">
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Smartphones
              </Text>
              <Text
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
                alignSelf={"start"}
              >
                Wearable Technology
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Top Selling Smartwatches
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Apple Price Drop
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Tablet Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Mobile Accessories
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Mobile Grips & Stands
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Car Mobile Holders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Memory Cards
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Cables & Cords
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Chargers & Adapters
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Headphones & Headsets
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Tablets & eReaders
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Premium Tablets, Above 15001
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"13px"}
                color={"white"}
                fontWeight={"300"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Every Day use Tablets below 15000
              </Text>
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                Power Banks
              </Text>
            </VStack>

            <VStack w="200px" h="100%">
              <Text
                alignSelf={"start"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={"500"}
                _hover={{ textDecorationLine: "underline", cursor: "pointer" }}
                mb="10px"
              >
                AI Learning Robots
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Box flex={"1"}>
          <Image
            src={SmartPhonesAndWearables}
            alt={SmartPhonesAndWearables}
            h="100%"
            w="100%"
          />
        </Box>
      </Flex>
      <Flex
        bgColor={main_red_color}
        color={"white"}
        display={["flex", "flex", "flex", "flex", "none", "none"]}
        h="65px"
        pr="10px"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Box display={"flex"} alignItems="center">
          <Box
            w="30px"
            ml="20px"
            bg={main_red_color}
            color={"white"}
            borderRadius="5px"
            h="30px"
            onClick={onOpen}
          >
            <GiHamburgerMenu size={"25px"} />
          </Box>
          <Drawer
            placement={"left"}
            onClose={onClose}
            isOpen={isOpen}
            size={"sm"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                display={"flex"}
                borderBottomWidth="1px"
                bgColor={main_red_color}
              >
                <Box color="white" h="80%" w="70px">
                  <Center w="70px" bg="rgb(228,37,41)" gap={"5px"}>
                    <FaUser color="white" size={"15px"} />
                    <Text
                      fontSize={"15px"}
                      fontWeight={"500"}
                      _hover={{ cursor: "pointer" }}
                    >
                      Login
                    </Text>
                  </Center>
                </Box>
                <Box color="white" h="80%" w="70px">
                  <Center w="70px" bg="rgb(228,37,41)" gap={"5px"}>
                    <Center height="20px">
                      <Divider orientation="vertical" />
                    </Center>
                    <Text
                      fontSize={"15px"}
                      fontWeight={"500"}
                      _hover={{ cursor: "pointer" }}
                    >
                      Register
                    </Text>
                  </Center>
                </Box>
              </DrawerHeader>
              <DrawerHeader pt="8px" bgColor="rgb(243,243,243)" h="40px">
                <Text fontSize={"14px"} color="rgb(123,123,123)">
                  Categories
                </Text>
              </DrawerHeader>
              <DrawerBody>
                <Accordion allowMultiple>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <MdTabletMac size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Mobiles & Tablets
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <FiMonitor size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Televisions
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <FaHeadphones size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Audio
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <GiPlug size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Home Appliances
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <HiComputerDesktop size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Computers
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>

                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <BsCameraFill size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Cameras
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <ImSpoonKnife size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Kitchen Appliances
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <FaBath size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Personal Care
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <FaUsb size={"17px"} />
                            <Box
                              as="span"
                              flex="1"
                              letterSpacing={"-1px"}
                              ml="12px"
                              textAlign="left"
                            >
                              Accessories
                            </Box>
                            {isExpanded ? (
                              <FaMinus fontSize="12px" />
                            ) : (
                              <FaPlus fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Smartphones
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Wearable Technology
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Top Selling Smartwatches
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Apple Price Drop
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Tablet Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Accessories
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Mobile Grips & Stands
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Car Mobile Holders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Memory Cards
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Cables & Cords
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Chargers & Adapters
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Headphones & Headsets
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Tablets & eReaders
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Every Day use Tablets below 15000
                          </Text>
                          <Text
                          letterSpacing={"-0.5px"}
                          ml="20px"
                            alignSelf={"start"}
                            fontSize={"14px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"400"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                          >
                            Premium Tablets above 15001
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            Power Banks
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            eSlates
                          </Text>
                          <Text
                          letterSpacing={"1px"}
                            fontSize={"15px"}
                            color={"rgb(66,70,91)"}
                            fontWeight={"500"}
                            _hover={{
                              textDecorationLine: "underline",
                              cursor: "pointer",
                            }}
                            mb="10px"
                            alignSelf={"start"}
                          >
                            AI Learning Robots
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Box w="180px" ml="20px" bg="rgb(228,37,41)" h="60px">
            <Image src={MainLogo} alt={MainLogo} width="100%" height={"100%"} />
          </Box>
        </Box>

        <Center w="80px" bg="rgb(228,37,41)" gap={"5px"}>
          <ImCart color="white" size={"20px"} />
        </Center>
      </Flex>
      <Flex
        bgColor={main_red_color}
        color={"white"}
        display={["flex", "flex", "flex", "flex", "none", "none"]}
        h="55px"
        px="10px"
        alignItems={"center"}
      >
        <Box
          flex="1"
          bg="rgb(228,37,41)"
          //  bg="white"
          margin={"auto"}
          h="auto"
        >
          <InputGroup bgColor={"rgb(255,255,255)"} borderRadius="40px">
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
      </Flex>
    </div>
  );
};

export default Navbar;

// Shavers & Trimmers
// Epilators
// Hair Dryers & Stylers
// Weighing Scales
// Irons

//
//
//