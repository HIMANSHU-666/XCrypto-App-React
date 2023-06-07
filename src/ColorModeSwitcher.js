import React from 'react';
import { useColorMode, useColorModeValue, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [inPhone] = useMediaQuery("(max-width: 400px)");


  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      zIndex={"10"}
      boxShadow={"0px 0px 10px #94a6a3 "}
      color="current"
      pos={"fixed"}
      top={inPhone ? "4" : "5rem"}
      right={"4"}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
