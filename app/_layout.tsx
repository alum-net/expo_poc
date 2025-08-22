import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      {Platform.OS === "web" && (
        <Stack.Screen name="professors" options={{ title: "Web Exclusive" }} />
      )}
      <Stack.Screen name="students" options={{ title: "Multiplatform" }} />
    </Stack>
  );
}
