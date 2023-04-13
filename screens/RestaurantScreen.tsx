import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { urlfor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

interface IDish {
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
}

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params as any;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlfor(imgUrl).url(),
          }}
          className="w-full h-52 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-3 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> • {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={22} color="gray" opacity={0.4} />
              <Text className="text-xs text-gray-500">Nearby • {address}</Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
          <Text className="pl-2 flex-1 text-nd font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00ccbb" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {dishes.map((dish: IDish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
