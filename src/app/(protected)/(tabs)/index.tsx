import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details">View details</Link>
      <Button
        title="View details"
        onPress={() => router.navigate("/details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
