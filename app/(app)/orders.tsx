import OrderItem from "@/components/OrderItem";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ORDERS = [
  {
    id: 456765,
    itemCount: 4,
  },
  {
    id: 454469,
    itemCount: 2,
  },
  {
    id: 454809,
    itemCount: 1,
  },
];

const orders = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <Text style={[styles.titleHeader, { color: theme.colors.text }]}>
        Orders
      </Text>
      <FlatList
        data={ORDERS}
        // data={[]}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ flex: 1, gap: 8 }}
        renderItem={({ item }) => (
          <OrderItem orderId={item.id} itemCount={item.itemCount} />
        )}
        ListEmptyComponent={() => (
          <View style={[styles.containerEmpty]}>
            <Ionicons name="cart" color={theme.colors.text} size={100} />
            <Text style={[styles.textEmpty, { color: theme.colors.text }]}>
              No Order yet
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 40,
  },
  titleHeader: { fontSize: 16, fontWeight: 700, marginHorizontal: "auto" },
  containerEmpty: {
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textEmpty: { fontSize: 24 },
});

export default orders;
