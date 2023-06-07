import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const NHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={"teal"}
        zIndex={"10"}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={`20`} />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>XCrypto</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}><Link to={"/"}>Home</Link></Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}><Link to={"/exchange"}>Exchanges</Link></Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}><Link to={"/coins"}>Coins</Link></Button>
            </VStack>
            {/* <HStack alignItems={"center"} pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
              <Button onClick={onClose}  colorScheme={"purple"}><Link to={"/login"}>Log In</Link></Button>
              <Button onClick={onClose} variant={"outline"} colorScheme={"purple"}><Link to={"/signup"}>Sign Up</Link></Button>
            </HStack> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NHeader;
