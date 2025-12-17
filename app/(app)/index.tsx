import BottomMenu from "@/components/BottomMenu";
import Categories from "@/components/Categories";
import TopSelling from "@/components/TopSelling";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Redirect } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const { isSignedIn, signOut } = useAuth();
  const { theme, mode, setMode } = useTheme();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/SignIn" />;
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={styles.headerImage}
        />
        <View style={{ height: 40, width: 90 }}>
          <BottomMenu
            label="Men"
            labelOnselect={true}
            select="Men"
            onPress={() => {}}
          />
        </View>
        <View
          style={[styles.headerCart, { backgroundColor: theme.colors.primary }]}
        >
          <Ionicons name="cart-outline" size={16} color={"white"} />
        </View>
      </View>
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: theme.colors.backgroundSecondary },
        ]}
      >
        <Ionicons name={"search"} size={16} />
        <TextInput placeholder="Search" />
      </View>
      <Categories />
      <TopSelling />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  headerImage: {
    borderRadius: 99,
    height: 40,
    width: 40,
  },
  headerCart: {
    borderRadius: 99,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    gap: 12,
    borderRadius: 99,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

export default index;
