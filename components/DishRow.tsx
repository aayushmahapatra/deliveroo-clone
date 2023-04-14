import { View, Text, TouchableOpacity, Image } from "react-native";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { urlfor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { addToBasket, removeFromBasket } from "../redux/basket/basket.slice";
import { IDishRow } from "../redux/basket/basket.interface";
import { IRootState } from "../redux/root-state.interface";

const DishRow: FC<IDishRow> = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) =>
    state.basket.items.filter((item) => item.id === id)
  );

  const [isPressed, setIsPressed] = useState<boolean>(false);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length) dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#f3f3f3" }}
              source={{ uri: urlfor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4 rounded"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                color={items.length ? "#00ccbb" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length || 0}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
