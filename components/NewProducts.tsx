import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Bag1",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 0,
    favarite: true,
  },
  {
    name: "Bag2",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 0,
    favarite: false,
  },
  {
    name: "Bag3",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 0,
    favarite: false,
  },
  {
    name: "Bag4",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 0,
    favarite: false,
  },
];

const NewProducts = () => {
  const { theme } = useTheme();
  return (
    <View>
      <FlatList
        data={products}
        horizontal
        style={{ marginHorizontal: -24 }}
        contentContainerStyle={[
          styles.itemContainer,
          { paddingHorizontal: 24 },
        ]}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={Number(item.price)}
            price_discount={Number(item.price_discount)}
            image={item.image}
            favarite={Boolean(item.favarite)}
            link={item.link}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default NewProducts;
