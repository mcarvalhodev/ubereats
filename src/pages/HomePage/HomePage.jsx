import { Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import Navigator from "../../router/Navigator";

const HomePage = () => {
  const navigateTo = new Navigator();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        navigateTo.feed();
      } else {
        navigateTo.login();
      }
    }, 5000);
  }, []);

  return (
    <Container bg={"#000000"} h="100vh">
      <Flex justify={"center"} align={"center"} h="full">
        <Image
          src={require("../../assets/logo-future-eats.png")}
          alt="Logo Future Eats"
          w={"126px"}
          h={"65px"}
        />
      </Flex>
    </Container>
  );
};

export default HomePage;
