import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { Colors, Metrics } from "../theme";
import PostCaption from "./PostCaption";
import PostImage from "./PostImage";
import PostLikes from "./PostLikes";
import PostReact from "./PostReact";
import PostComments from "./PostComments";
import CommentFooter from "./CommentFooter";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <PostHeader post={post} />
      <PostCaption post={post} />
      <PostImage post={post} />
      <PostLikes post={post} />
      <PostReact post={post} />
      <PostComments post={post} />
      <CommentFooter post={post} />
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
