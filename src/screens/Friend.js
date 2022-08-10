import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../theme";
import NavBarTab from "../navigation/NavBarTab";
import Friends from "./Friends";

const Friend = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBarTab navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Friends />
      </ScrollView>
    </View>
  );
};

export default Friend;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
