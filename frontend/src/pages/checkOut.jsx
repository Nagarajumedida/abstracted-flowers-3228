import {
  Image,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  AspectRatio,
  Stack,
  Modal,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Select,
  Checkbox,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";



const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleClick = () => {

 if(name && mobile && pincode && city&& Building){
  alert("Address added Successfully");
  onClose();
  navigate("/creditcard");
 }
else{
  alert("Please fill your all details");
  navigate("/checkout");
}
};



  const [name,setname]=useState('')
  const [mobile,setmobile]=useState('')
  const [pincode,setpincode]=useState('')
  const [city,setcity]=useState('')
  const [Building,setBuilding]=useState('')









  return (
    <div>
       
      <Container mb={"370px"} pt={"100px"} maxW="8xl" bg="white.600">
        <Flex>
         
          <Spacer />
          <Box p="4">
           
            <Text fontSize={"14px"}>Call 1800-123-1555</Text>

            <Text fontSize={"12px"}>Monday - Saturday, 09:00AM - 07:00PM</Text>
          </Box>
        </Flex>

        <Divider orientation="horizontal" />

        <Box p={4}>
          <Text textAlign={"left"} fontSize={"24px"}>
            Select a shipping method
          </Text>
        </Box>
        <Box>
          <Flex gap={"400px"}>
            <Box w="50%" h="10" bg="white.500">
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>
                    <Text>
                      Home Delivery
                      <p>Get your product deliverd to your home</p>
                    </Text>
                  </Tab>
                  <Tab>
                    <Text>
                      Click & Collect
                      <p>Collect your order from a store of your choice</p>
                    </Text>
                  </Tab>
                </TabList>
                <TabPanels>
                  {/* Home Delivery */}
                  <TabPanel>
                    {/* <p>Add new address</p> */}
                    <HStack spacing="24px">

                      {/* <Box w="50%" h="10" bg="white.500" textAlign={"right"}>
                        <ModalForm />
                      </Box> */}
                    </HStack>
                  </TabPanel>

                  {/* Pick from nearby store */}
                  <TabPanel>
                    <p>Click & Collect</p>

                    <AspectRatio ratio={10 / 3}>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
                    </AspectRatio>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box p={"5px"} w={"50%"}>
              
              
              <Button
                onClick={onOpen}
                mt={"20px"}
                color={"white"}
                bgColor={"rgb(250, 166, 25)"}
                w={"full"}
              >
                Checkout Now
              </Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size={"xl"}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add a new Address</ModalHeader>

                  <ModalCloseButton />

                  <ModalBody pb={6}>
                    {/* Full Name */}
                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input value={name}
                      onChange={(e)=>setname(e.target.value)}
                        ref={initialRef} 
                        placeholder="Enter your full name"
                        required/>
                    </FormControl>

                    {/* Mobile Number */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>Mobile Number</FormLabel>
                      <Input onChange={(e)=>setmobile(e.target.value)} value={mobile} placeholder="Enter your mobile number" />
                    </FormControl>

                    {/* Pincode */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>Pincode</FormLabel>
                      <Input onChange={(e)=>setpincode(e.target.value)} value={pincode} placeholder="Enter your Pincode" />
                    </FormControl>

                    {/* City */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>City</FormLabel>
                      <Input onChange={(e)=>setcity(e.target.value)} value={city} placeholder="Enter your City or Town" />
                    </FormControl>

                    {/* State */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>State</FormLabel>
                      <Select placeholder="Select your State">
                        <option value="option1">Andhra Pradesh</option>
                        <option value="option2">Mumbai</option>
                        <option value="option3">Karnataka</option>
                      </Select>
                    </FormControl>

                    {/* Building name */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>Building name or number</FormLabel>
                      <Input value={Building} onChange={(e)=>setBuilding(e.target.value)}  placeholder="Enter Building Name" />
                    </FormControl>

                    {/* Strret name */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>Street name or number</FormLabel>
                      <Input placeholder="Flat/House number, Floor, Building" />
                    </FormControl>

                    {/* Landmark */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>Landmark</FormLabel>
                      <Input placeholder="Landmark" />
                    </FormControl>

                    {/* Address Type */}
                    <FormControl mt={4} isRequired>
                      <FormLabel>Address Type</FormLabel>
                      {/* <Input placeholder='Landmark' /> */}
                      <RadioGroup defaultValue="0">
                        <Stack spacing={5} direction="row">
                          <Radio colorScheme="orange" value="1">
                            Home
                          </Radio>
                          <Radio colorScheme="orange" value="2">
                            Office
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>

                    {/* Default Address */}
                    <FormControl mt={4} isRequired>
                      {/* <FormLabel>Landmark</FormLabel> */}
                      {/* <Input placeholder='Landmark' /> */}
                      <Checkbox colorScheme="orange">
                        Use this as my default shipping address
                      </Checkbox>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button 
                      onClick={handleClick}
                      colorScheme="orange"
                      mr={3}
                      width={"100%"}
                    >
                      Ship to this Address
                    </Button>
                    {/* <Button onClick={onClose}>Cancel</Button> */}
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>
        </Box>
      </Container>
      {/* <Footer/> */}
    </div>
  );
};

export default Checkout;