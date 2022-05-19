import { Text } from "@chakra-ui/react";
import React from "react";

const Label = ({ text }) => {
  return (
    <Text
      top={"0%"}
      left={"5px"}
      transform={"translate(10px,-45%) scale(0.8)"}
      p="0 12px"
      bg="#fff"
      transformOrigin="top left"
      transition="all .2s ease-out"
      color="#b8b8b8"
      pointerEvents="none"
      pos="absolute"
      w="fit-content"
      h="fit-content"
      zIndex="5"
    >
      {text}
    </Text>
  );
};

export default Label;
