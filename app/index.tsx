import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>AlumNet - Multiplatform</Text>
      <Link href="/teachers">
        <Text>Go to Professors</Text>
      </Link>
      <Link href="/students">
        <Text>Go to Professors</Text>
      </Link>
    </View>
  );
}
