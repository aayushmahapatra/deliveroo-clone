import { View, Image, Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlfor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

interface IRestaurantCard {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: never[];
  long: number;
  lat: number;
}

const RestaurantCard: FC<IRestaurantCard> = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          "Restaurant" as never,
          {
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
          } as never
        );
      }}
      className="bg-white mr-3 shadow"
    >
      <Image
        source={{
          uri: urlfor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-2">
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
    </TouchableOpacity>
  );
};

export default RestaurantCard;
