import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ name, description, price, photoUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <Box
        pos={"relative"}
        borderWidth="1px"
        borderRadius="lg"
        borderColor="#b8b8b8"
        display={"flex"}
      >
        <Box
          width={"96px"}
          height={"112px"}
          borderLeftRadius="8px"
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundImage={photoUrl}
        ></Box>
        <Box>
          <VStack p={3} pb={0} spacing={1} alignItems="flex-start">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h1"
              lineHeight="tight"
              noOfLines={1}
              color="brand.500"
            >
              {name}
            </Box>
            <Text
              color="#b8b8b8"
              fontWeight={"semibold"}
              letterSpacing="wide"
              fontSize="xs"
            >
              {description}
            </Text>
            <HStack>
              <Heading as="h4" size="md">
                R${price}
              </Heading>
              <Box
                as={"button"}
                py="9px"
                px="20px"
                bg={"white"}
                borderColor={"brand.500"}
                color={"brand.500"}
                borderWidth="1px"
                pos={"absolute"}
                right={0}
                bottom={0}
                borderTopLeftRadius="8px"
                borderTopRightRadius="0px"
                borderBottomLeftRadius="0px"
                borderBottomRightRadius="8px"
                onClick={onOpen}
              >
                adicionar
              </Box>

              {/* <Box
              as={"button"}
              py="9px"
              px="20px"
              bg={"white"}
              borderColor={"#e02020"}
              color={"#e02020"}
              borderWidth="1px"
              pos={"absolute"}
              right={0}
              bottom={0}
              borderTopLeftRadius="8px"
              borderTopRightRadius="0px"
              borderBottomLeftRadius="0px"
              borderBottomRightRadius="8px"
            >
              remover
            </Box> */}
            </HStack>
          </VStack>
        </Box>
      </Box>
      <Modal
        size={"sm"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecione a quantidade desejada</ModalHeader>
          <ModalBody pb={6}>
            <Select ref={initialRef}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Box
              as="button"
              textTransform={"uppercase"}
              color={"brand.500"}
              fontWeight={"semibold"}
              onClick={onClose}
            >
              adicionar ao carrinho
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
