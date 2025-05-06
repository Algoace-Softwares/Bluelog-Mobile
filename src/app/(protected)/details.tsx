import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function DetailsScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button
        title="Go back"
        onPress={() => router.back()}
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
