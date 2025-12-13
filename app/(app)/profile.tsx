import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>profile</Text>
    </SafeAreaView>
  );
};

export default profile;
