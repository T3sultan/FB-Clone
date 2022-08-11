import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import NavBarTab from "../navigation/NavBarTab";
import { Colors } from "../theme";
import Messages from "./Messages";

const Message = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBarTab navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Messages />
      </ScrollView>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
