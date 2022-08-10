import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Metrics } from "../theme";
import CustomText from "../common/CustomText";

const PostLikes = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: Metrics.base, height: Metrics.base }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/456/456115.png",
        }}
      />
      <Image
        style={{ width: Metrics.base, height: Metrics.base }}
        source={{
          uri: "https://cdn-icons.flaticon.com/png/128/3670/premium/3670159.png?token=exp=1660147578~hmac=5386db3e4b44d3220ff47445a2661921",
        }}
      />
      <CustomText style={{ margin: Metrics.start }}>{post.likes}</CustomText>
    </View>
  );
};

export default PostLikes;

const styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.start,
    flexDirection: "row",
    alignItems: "center",
  },
});
