import NotificationItem from "@/components/NotificationItem";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NOTIFICATIONS = [
  {
    id: 1,
    message:
      "Gilbert, you placed and order check your order history for full details",
    read: false,
  },
  {
    id: 2,
    message:
      "Gilbert, Thank you for shopping with us we have canceled order #24568.",
    read: false,
  },
  {
    id: 3,
    message:
      "Gilbert, your Order #24568 has been  confirmed check  your order history for full details",
    read: true,
  },
];

const notifications = () => {
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
        Notifications
      </Text>
      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ flex: 1, gap: 8 }}
        renderItem={({ item }) => (
          <NotificationItem message={item.message} read={item.read} />
        )}
        ListEmptyComponent={() => (
          <View style={[styles.containerEmpty]}>
            <Ionicons
              name="notifications"
              color={theme.colors.text}
              size={100}
            />
            <Text style={[styles.textEmpty, { color: theme.colors.text }]}>
              No Notification yet
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

export default notifications;
