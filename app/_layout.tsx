import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { Stack, useRouter, useSegments } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";

function AuthLayout() {
  const { isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (isSignedIn && inAuthGroup) {
      router.replace("/(app)");
    } else if (!isSignedIn && !inAuthGroup) {
      router.replace("/SignIn");
    }
  }, [isSignedIn, segments]);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <AuthLayout />
        </AuthProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
