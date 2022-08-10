import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Metrics } from "../theme";

const PostImage = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.uploadImage} source={{ uri: post.upload_img }} />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    paddingTop: Metrics.start,
  },
  uploadImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
