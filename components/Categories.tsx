import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlfor } from "../sanity";

interface ICategory {
  _id: string;
  image: string;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "category"]`)
      .then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category: ICategory) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlfor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
