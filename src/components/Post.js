import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { Colors, Metrics } from "../theme";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader post={post} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    padding: Metrics.start,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    marginTop: Metrics.halfBase,
  },
});
