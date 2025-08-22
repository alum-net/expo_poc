import { useFocusEffect, useRouter } from "expo-router";
import { Platform, Text, View } from "react-native";

export const unstable_settings = {
  platforms: ["web"],
};

export default function Teachers() {
  const router = useRouter();

  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.
    if (Platform.OS !== "web") {
      router.dismissAll();
      router.replace("/");
    }
  });

  return (
    <View>
      <Text>This route is only visible on the web.</Text>
    </View>
  );
}
