import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Text,
  useMediaQuery
} from '@chakra-ui/react';

const Footer = () => {
  const [inPhone] = useMediaQuery("(max-width: 400px)");
  return (
    <>
      <Box  bgColor={'blackAlpha.900'} minH={'40'}   p={inPhone ? null : "10"} py={inPhone ? "3rem"  : null} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textAlign={"center"} textTransform={'uppercase'}>
              About Us
            </Heading>
            <HStack  py={'2'}>
              <Text  color={'white'} w={inPhone ? "100%" : null} textAlign={"center"} fontSize={'sm'}> We are the best crypto traders in india, we provide best guidence about crypto at very reasonable price</Text>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading fontSize={"5xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} marginY={"1"}>XCrypto</Heading>
            <Text mt={"5"}>
            ©2023 All rights are reserved by Himanshu
            </Text>
          </VStack>
          <VStack w={'full'}>
            <Heading size={"md"}  textTransform={"uppercase"}>
                Social Media
            </Heading>
            <Button variant={"link"} colorScheme={"whiteAlpha.700"}>
                <a href="https://instagram.com/am_himanshusharma?igshid=ZmZhODViOGI=">Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha.700"}>
                <a href="https://instagram.com/am_himanshusharma?igshid=ZmZhODViOGI=">Instagram</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha.700"}>
                <a href="https://github.com/HIMANSHU-666">Github</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
