import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategorieItemProps {
  label: string;
  image: string;
  link: string;
}

const CategorieItem = ({ label, image, link }: CategorieItemProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity>
      <View style={[styles.container]}>
        <Image source={{ uri: image }} style={[styles.image]} />
        <Text style={[styles.label, { color: theme.colors.text }]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { gap: 4, alignItems: "center" },
  image: { width: 56, height: 56, borderRadius: 99 },
  label: { fontSize: 12 },
});

export default CategorieItem;
