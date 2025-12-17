import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import CategorieItem from "./CategorieItem";

const categories = [
  {
    label: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1611817757591-c3f345024273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "",
  },
  {
    label: "Shorts",
    image:
      "https://images.unsplash.com/photo-1562044447-280a02d1cd22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fFNob3J0cyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    link: "",
  },
  {
    label: "Shoes",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNuZWFrZXJzfGVufDB8fDB8fHww ",
    link: "",
  },
  {
    label: "Bag",
    image:
      "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFnfGVufDB8fDB8fHww",
    link: "",
  },
  {
    label: "Accessories",
    image:
      "https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFjY2Vzc29yaWVzJTIwbWVufGVufDB8fDB8fHww",
    link: "",
  },
];

const Categories = () => {
  return (
    <View style={[styles.displayContainer]}>
      <View style={styles.headerDisplay}>
        <Text style={[styles.title]}>Categories</Text>
        <TouchableOpacity>
          <Text style={[styles.subTitle]}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={[styles.itemContainer]}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <CategorieItem
            label={item.label}
            image={item.image}
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
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default Categories;
