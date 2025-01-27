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
      <Text className="text-red-700">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/">Home</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/20">property</Link>
    </View>
  );
}
