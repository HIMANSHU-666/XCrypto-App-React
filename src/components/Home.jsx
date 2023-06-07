import React from "react";
import { Box, Heading, Stack, Image, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import btcSrc from "../assets/btc.png";
import trd from "../assets/trader.jpg"
import { motion } from "framer-motion";

const Home = () => {
  const [inPhone] = useMediaQuery("(max-width: 400px)");
  return (
    <>
      <Box
        display={"flex"}
        gap={inPhone ? "1" : "3"}
        flexDirection={"column"}
        alignItems={"center"}
        bgColor={"blackAlpha.900"}
        w={"full"}
        minH={inPhone ? "100vh" : "78rem"}
      >
        <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "20px",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image src={btcSrc} w={"full"} h={"full"} objectFit={"contain"} />
        </motion.div>
        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.700"}
          marginY={inPhone ? "-30" : "2"}
        >
          XCrypto
        </Text>
        <Stack  display={"flex"} flexDirection={inPhone ? "column" : "row"} marginTop={inPhone ? "5rem" : "3"}  w={"full"} alignItems={"center"} justifyContent={"center"}>
          <VStack  gap={"1rem"} w={inPhone ? "full" : "50%"}  textAlign={"center"} alignItems={"center"} justifyContent={"center"} >
            <Heading color={"blanchedalmond"}>
              Build Your Crypto Carrier Wih Us !!
            </Heading>
            <Text w={inPhone ? "full" : "60%"} textAlign={"center"} color={"ButtonHighlight"}>
              Our proffesional traders have excellent knowlegde to trade in
              Crypto Era, They are avialable 24/7 to help you to grow in Crypto
              world.
            </Text>
          </VStack>
          <VStack w={inPhone ? "full" : "40%"} h={inPhone ? "30rem" : null}  p={1} >
          <motion.div
          style={{
            height: "80vh",
          }}
          animate={{
            translateY: "10px",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
            <Image src={trd} height={inPhone ? "80%" : "30rem"} width={inPhone ? "full" : null} borderRadius={"5rem"} boxShadow={" 0px 0px 10px white"} />
          
        </motion.div>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
