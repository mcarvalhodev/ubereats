import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Client from "../../services/Client";
import { Divider, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import ProductCard from "../../components/ProductCard/ProductCard";

const RestauranteDetailPage = () => {
  const api = new Client();
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  const getRestaurantDetail = async () => {
    const res = await api.getRestaurantDetail(id);
    console.log(res.data);
    setRestaurant(res.data.restaurant);
  };

  useEffect(() => {
    getRestaurantDetail();
  }, []);
  return (
    <VStack w="full" h="100vh" p={5} spacing={10}>
      <SimpleGrid spacing={3}>
        <RestaurantCard
          id={restaurant.id}
          logoUrl={restaurant.logoUrl}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          address={restaurant.address}
          category={restaurant.category}
          name={restaurant.name}
        />
      </SimpleGrid>
      <Heading as="h4" size="md">
        Principais
      </Heading>
      <Divider borderColor={"black"} />

      <SimpleGrid spacing={3} w="full">
        {restaurant?.products?.map((product) => {
          return (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              photoUrl={product.photoUrl}
            />
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default RestauranteDetailPage;
