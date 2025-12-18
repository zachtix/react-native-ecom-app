import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface BottomMenuProps {
  label: string;
  labelOnselect: boolean;
  select: string;
  displaySelect?: React.ReactNode;
  onPress: () => void;
}

const BottomMenu = ({
  label,
  labelOnselect = false,
  select,
  displaySelect,
  onPress = () => {},
}: BottomMenuProps) => {
  const { theme, mode, setMode } = useTheme();
  const _label = useMemo<string>(() => {
    if (labelOnselect) {
      return select;
    } else {
      return label;
    }
  }, [label, select]);
  const [_open, _setOpen] = useState<boolean>(false);
  return (
    <TouchableOpacity onPress={() => _setOpen(true)}>
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.backgroundSecondary },
        ]}
      >
        <Text style={[styles.label, { color: theme.colors.text }]}>
          {_label}
        </Text>
        <View>
          <Ionicons
            name={"chevron-down-outline"}
            size={16}
            color={theme.colors.text}
          />
        </View>
      </View>
      <Modal
        visible={_open}
        transparent={true}
        animationType="slide"
        onRequestClose={() => _setOpen(!_open)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderTopStartRadius: 20,
              borderTopEndRadius: 16,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text
              style={{
                marginBottom: 15,
                textAlign: "center",
              }}
            >
              Hello World!
            </Text>
            <Pressable
              style={[
                {
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                },
                {
                  backgroundColor: "#2196F3",
                },
              ]}
              onPress={() => _setOpen(!_open)}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hide Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 99,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingHorizontal: 14,
    gap: 4,
  },
  label: { fontSize: 16, fontWeight: 700 },
});

export default BottomMenu;
