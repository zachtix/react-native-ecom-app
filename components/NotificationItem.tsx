import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NotificationItemProp {
  message: string;
  read: boolean;
}

const NotificationItem = ({ message, read }: NotificationItemProp) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.backgroundSecondary },
        ]}
      >
        <View style={[styles.iconContainer]}>
          <Ionicons
            name={"notifications-outline"}
            color={theme.colors.text}
            size={24}
          />
          {!read && <View style={styles.unread} />}
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={[styles.message, { color: theme.colors.text }]}
            numberOfLines={2}
          >
            {message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    height: 72,
  },
  message: { fontSize: 12 },
  iconContainer: { position: "relative" },
  unread: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FA3636",
    width: 8,
    height: 8,
    borderRadius: 99,
  },
});

export default NotificationItem;
