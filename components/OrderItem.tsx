import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface OrderItemItemProp {
  orderId: number;
  itemCount: number;
}

const OrderItem = ({ orderId, itemCount }: OrderItemItemProp) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.backgroundSecondary },
        ]}
      >
        <View style={[styles.leftContainer]}>
          <Ionicons
            name={"receipt-outline"}
            color={theme.colors.text}
            size={24}
          />
          <View style={{ gap: 2 }}>
            <Text style={[styles.orderId, { color: theme.colors.text }]}>
              Order #{orderId}
            </Text>
            <Text style={[styles.itemCount, { color: theme.colors.text50 }]}>
              {itemCount} items
            </Text>
          </View>
        </View>
        <Ionicons
          name={"chevron-forward"}
          size={24}
          color={theme.colors.text}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
  },
  orderId: { fontSize: 16 },
  itemCount: { fontSize: 12 },
  leftContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
});

export default OrderItem;
