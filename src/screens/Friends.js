import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Friends = () => {
  return (
    <View style={styles.container}>
      <Text>Friends</Text>
    </View>
  );
};

export default Friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
