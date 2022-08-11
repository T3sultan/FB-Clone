import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBarTab from "../navigation/NavBarTab";
import Notifications from "./Notifications";

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <NavBarTab navigation={navigation} />
      <Notifications />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
