import React from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { useState, useEffect } from "react";
import Client from "../services/Client";

const GlobalState = (props) => {
  const api = new Client();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemonData = async (result) => {
    const arr = [];
    await Promise.all(
      result.map(async (pokemon) => {
        const response = await api.getPokemonByName(pokemon.name);
        arr.push(response);
      })
    );
  };

  const getRestaurants = async () => {
    // setLoading(true);
    const response = await api.getRestaurants();
    console.log(response.data)
    // setLoading(false);
    setRestaurants(response.data.restaurants);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const request = {
    restaurants,
  };

  return (
    <GlobalStateContext.Provider value={request}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
