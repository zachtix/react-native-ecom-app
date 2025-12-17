import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Bag1",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 100,
    favarite: false,
  },
  {
    name: "Bag2",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 100,
    favarite: true,
  },
  {
    name: "Bag3",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 100,
    favarite: false,
  },
  {
    name: "Bag4",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/023/522/781/small/school-backpack-cutout-png.png",
    link: "",
    price: 100,
    price_discount: 100,
    favarite: false,
  },
];

const TopSelling = () => {
  return (
    <View style={[styles.displayContainer]}>
      <View style={styles.headerDisplay}>
        <Text style={[styles.title]}>Top Selling</Text>
        <TouchableOpacity>
          <Text style={[styles.subTitle]}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        horizontal
        contentContainerStyle={[styles.itemContainer]}
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
  displayContainer: { gap: 16 },
  headerDisplay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: 700 },
  subTitle: { fontSize: 16 },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default TopSelling;
