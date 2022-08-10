import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../common/CustomText";
import { Metrics } from "../theme";

const PostCaption = ({ post }) => {
  return (
    <View>
      <CustomText style={{ paddingHorizontal: Metrics.halfBase }}>
        {post.caption}
      </CustomText>
    </View>
  );
};

export default PostCaption;

const styles = StyleSheet.create({});
