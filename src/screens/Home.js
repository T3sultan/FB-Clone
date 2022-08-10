import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBarTab from "../navigation/NavBarTab";
import PostOption from "../components/PostOption";
import Stories from "../components/Stories";
import Post from "../components/Post";
import { POSTS } from "../data/Posts";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header />
      <NavBarTab navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PostOption />
        <Stories />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
