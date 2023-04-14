import { View, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/root-state.interface";

const BasketScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) => state.basket.items);
  const restaurants = useSelector(
    (state: IRootState) => state.restaurant.restaurant
  );

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
