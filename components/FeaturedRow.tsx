import { View, Text, ScrollView } from "react-native";
import { FC, useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

interface IRestaurant {
  _id: number;
  image: string;
  name: string;
  rating: number;
  type: { name: string };
  address: string;
  short_description: string;
  dishes: never[];
  long: number;
  lat: number;
}

interface IFeaturedRow {
  id: string;
  title: string;
  description: string;
}

const FeaturedRow: FC<IFeaturedRow> = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant: IRestaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
