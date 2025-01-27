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
      <Text className="text-black-300 my-5 font-rubik-ExtraBold text-4xl">Home screen.</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/">Home</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/20">property</Link>
    </View>
  );
}
