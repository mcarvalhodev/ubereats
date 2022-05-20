import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import search from "../../assets/search.svg";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const RestauranteListPage = () => {
  const { restaurants } = useContext(GlobalStateContext);

  return (
    <VStack w="full" h="100vh" p={5} spacing={10}>
      <Box
        w="full"
        border={"1px"}
        borderColor="#b8b8b8"
        p="1em"
        display={"flex"}
        h="56px"
      >
        <Image src={search} alt="Dan Abramov" width={"24px"} height={"24px"} />
        <Input placeholder="Restaurante" border={"none"} h="30px" />
      </Box>

      <HStack w="full">
        <Tabs colorScheme="brand" overflowX={"scroll"}>
          <TabList>
            <Tab>Burger</Tab>
            <Tab>Asiática</Tab>
            <Tab>Hamburger</Tab>
            <Tab>Italiana</Tab>
            <Tab>Sorvetes</Tab>
            <Tab>Carnes</Tab>
            <Tab>Baiana</Tab>
            <Tab>Petiscos</Tab>
            <Tab>Mexicana</Tab>
          </TabList>
          <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>

      <SimpleGrid spacing={3} w="full">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              deliveryTime={restaurant.deliveryTime}
              logoUrl={restaurant.logoUrl}
              shipping={restaurant.shipping}
            />
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default RestauranteListPage;
