import { Image, Text, TouchableOpacity } from "react-native";
import { FC } from "react";

interface ICategoryCard {
  imgUrl: string;
  title: string;
}

const CategoryCard: FC<ICategoryCard> = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
