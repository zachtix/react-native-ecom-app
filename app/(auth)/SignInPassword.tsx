import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/theme/ThemeProvider";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInPassword = () => {
  const { signIn } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text
        style={[
          styles.title,
          {
            color: theme.colors.text,
          },
        ]}
      >
        Sign In
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.inputEmail,
            {
              backgroundColor: theme.colors.backgroundSecondary,
              color: theme.colors.text,
            },
          ]}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor={theme.colors.text}
        />
        <TouchableOpacity
          onPress={signIn}
          style={[
            styles.buttonContinue,
            {
              backgroundColor: theme.colors.primary,
            },
          ]}
          // disabled={true}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Text
            style={[
              styles.create,
              {
                color: theme.colors.text,
              },
            ]}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.create,
                {
                  color: theme.colors.text,
                  fontWeight: 700,
                },
              ]}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 123,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 34.5,
    fontWeight: 700,
    marginBottom: 32,
  },
  inputContainer: { gap: 16 },
  inputEmail: {
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 18,
    height: 56,
  },
  create: { fontSize: 12 },
  buttonContinue: {
    borderRadius: 99,
    paddingVertical: 12,
  },
  buttonText: {
    color: "white",
    lineHeight: 26.7,
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  authMethod: {},
});

export default SignInPassword;
