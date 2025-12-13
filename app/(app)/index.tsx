import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/theme/ThemeProvider";
import { Redirect } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const { isSignedIn, signOut } = useAuth();
  const { theme, mode, setMode } = useTheme();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/SignIn" />;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={{ color: theme.colors.text }}>App page</Text>
      <Button title="Logout" onPress={signOut} />
      <Button title="Light" onPress={() => setMode("light")} />
      <Button title="Dark" onPress={() => setMode("dark")} />
      <Button title="System" onPress={() => setMode("system")} />
    </SafeAreaView>
  );
};

export default index;
