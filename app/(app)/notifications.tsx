import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notifications = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>notifications</Text>
    </SafeAreaView>
  );
};

export default notifications;
