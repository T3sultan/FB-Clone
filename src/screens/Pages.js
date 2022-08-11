import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBarTab from "../navigation/NavBarTab";
import Page from "./Page";

const Pages = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <NavBarTab navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Page />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pages;

const styles = StyleSheet.create({});
