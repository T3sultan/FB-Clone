import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
