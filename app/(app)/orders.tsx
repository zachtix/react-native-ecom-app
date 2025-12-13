import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const orders = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>orders</Text>
    </SafeAreaView>
  );
};

export default orders;
