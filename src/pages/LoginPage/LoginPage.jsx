import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/uber-eats-logo-0.png";

const LoginPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack w="full" h="100vh" p={5} spacing={10} justify="center">
        <Image src={logo} alt="Dan Abramov" w="30%" />
        <Text fontWeight={"bold"} fontSize="md">
          Entrar
        </Text>
        <SimpleGrid columns={1} rowGap={6} w="full">
          <FormControl>
            <FormLabel>E-mail*</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="email@email.com"
              borderRadius={"2px"}
              bg="white"
              py="24px"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha*</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              borderRadius={"2px"}
              py="24px"
            />
          </FormControl>
          <Button size={"lg"} w="full" bg="#5cb646" borderRadius={"2px"}>
            Entrar
          </Button>
        </SimpleGrid>
        <Text fontWeight={"bold"}>
          Não possui cadastro? <Link to={"/signup"}>Clique aqui.</Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default LoginPage;
