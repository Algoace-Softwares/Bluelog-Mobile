import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SecurityTab() {
  return (
    <View style={styles.container}>
      <Text>Security Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
