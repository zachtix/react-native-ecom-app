import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductCardProps {
  name: string;
  price: number;
  price_discount: number;
  image: string;
  favarite: boolean;
  link: string;
}

const ProductCard = ({
  name,
  price,
  price_discount,
  image,
  favarite,
  link,
}: ProductCardProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.backgroundSecondary },
        ]}
      >
        <TouchableOpacity
          style={{ position: "absolute", right: 8, top: 4, zIndex: 1 }}
        >
          <Ionicons
            name={favarite ? "heart" : "heart-outline"}
            size={24}
            color={favarite ? "red" : "black"}
          />
        </TouchableOpacity>

        <Image source={{ uri: image }} style={[styles.image]} />
        <View style={{ gap: 8, paddingHorizontal: 4 }}>
          <Text style={[styles.name]}>{name}</Text>
          <View
            style={{ flexDirection: "row", gap: 8, alignItems: "baseline" }}
          >
            <Text style={[styles.price]}>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Text>
            <Text
              style={[styles.price_discount, { color: theme.colors.text50,display:price_discount?"flex":"none" }]}
            >
              {price_discount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 159,
    borderRadius: 8,
    position: "relative",
    paddingBottom: 16,
    gap: 8,
  },
  image: { width: 159, height: 220 },
  name: { fontSize: 12 },
  price: { fontSize: 12, fontWeight: 700 },
  price_discount: {
    fontSize: 10,
    fontWeight: 500,
    textDecorationLine: "line-through",
  },
});

export default ProductCard;
