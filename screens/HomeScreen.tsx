import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

interface IFeaturedCategory {
  _id: string;
  name: string;
  short_description: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<
    IFeaturedCategory[]
  >([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
        ...,
        dishes[]->
        }
      }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-12">
      {/* Header */}
      <View className="flex-row py-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl pb-1 mr-1">
              Current Location
            </Text>
            <ChevronDownIcon size={20} color="#00ccbb" />
          </View>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-3 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 py-2 px-3 rounded">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        {featuredCategories?.map((category: IFeaturedCategory) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
