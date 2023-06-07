import { Alert, AlertIcon, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  const [inPhone] = useMediaQuery("(max-width: 400px)");
  return (
    <>
      <Alert
        status="error"
        position={"fixed"}
        bottom={inPhone ? "3rem" : "4"}
        left={"50%"}
        transform={"translateX(-50%)"}
        w={inPhone ? "80%" : "25%"}
        borderRadius={"full"}
        colorScheme={"red"}
        transition={"0.2s"}
      >
        <AlertIcon />
        {message}
      </Alert>
    </>
  );
};

export default ErrorComponent;
