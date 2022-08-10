import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const PostImage = ({ post }) => {
  return (
    <View>
      <Image source={{ uri: post.upload_img }} />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({});
