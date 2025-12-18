import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MENUS = [
  {
    label: "Address",
    link: "",
  },
  {
    label: "Wishlist",
    link: "",
  },
  {
    label: "Payment",
    link: "",
  },
  {
    label: "Help",
    link: "",
  },
  {
    label: "Support",
    link: "",
  },
];

const profile = () => {
  const { theme } = useTheme();
  const { signIn, signOut, isSignedIn } = useAuth();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        }}
        style={styles.headerImage}
      />
      <View
        style={[
          styles.profileContainer,
          { backgroundColor: theme.colors.backgroundSecondary },
        ]}
      >
        <Text style={[styles.profileName, { color: theme.colors.text }]}>
          John Doe
        </Text>
        <Text style={[styles.profileEmail, { color: theme.colors.text50 }]}>
          johndoe@mail.com
        </Text>
        <Text style={[styles.profilePhone, { color: theme.colors.text50 }]}>
          123-456-7890
        </Text>
      </View>
      <View>
        <FlatList
          data={MENUS}
          contentContainerStyle={[styles.menuContainer]}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View
                style={[
                  styles.menu,
                  {
                    backgroundColor: theme.colors.backgroundSecondary,
                  },
                ]}
              >
                <Text style={[styles.menuText, { color: theme.colors.text }]}>
                  {item.label}
                </Text>
                <Ionicons
                  name={"chevron-forward"}
                  size={24}
                  color={theme.colors.text}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => signOut()}
        style={{ marginHorizontal: "auto" }}
      >
        <Text style={[styles.signOut, { color: "#FA3636" }]}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    gap: 32,
    paddingHorizontal: 24,
  },
  headerImage: {
    borderRadius: 99,
    height: 80,
    width: 80,
    marginHorizontal: "auto",
  },
  profileContainer: {
    gap: 8,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  profileName: { fontSize: 16, fontWeight: 700 },
  profileEmail: { fontSize: 16 },
  profilePhone: { fontSize: 16 },
  menuContainer: { gap: 8 },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 16,
  },
  menuText: { fontSize: 16, fontWeight: 500 },
  menuIcon: {},
  signOut: { fontSize: 16, fontWeight: 700 },
});

export default profile;
