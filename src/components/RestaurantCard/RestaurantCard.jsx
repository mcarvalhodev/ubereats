import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  id,
  name,
  logoUrl,
  deliveryTime,
  shipping,
  address,
  category,
}) => {
  return (
    <>
      <Link to={`/restaurant/${id}`}>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="#b8b8b8"
        >
          <Box
            height={"120px"}
            borderTopRadius="8px"
            backgroundSize={"cover"}
            backgroundPosition={'center'}
            backgroundImage={logoUrl}
          ></Box>
          <Box p="6">
            <Box display="flex" flexDirection={"column"}>
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

              <Box
                w={"full"}
                color="#b8b8b8"
                fontWeight={"semibold"}
                letterSpacing="wide"
                fontSize="xs"
              >
                <Text fontSize="md">{category}</Text>

                <Flex justify={"space-between"}>
                  <Text fontSize="md">{deliveryTime} min</Text>
                  <Text fontSize="md">Frete R${shipping},00</Text>
                </Flex>
                <Text fontSize="md">{address}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default RestaurantCard;
