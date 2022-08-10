import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, Metrics } from "../theme";
import CustomText from "../common/CustomText";

const PostComments = ({ post }) => {
  return (
    <View>
      {post.comments.map((comment, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            marginTop: Metrics.start,
            alignItems: "center",
          }}
        >
          <Image
            style={styles.commentImage}
            source={{ uri: comment.profile_img }}
          />
          <View style={styles.commentsStyling}>
            <CustomText>{comment.name}</CustomText>
            <CustomText>{comment.comment}</CustomText>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostComments;

const styles = StyleSheet.create({
  commentImage: {
    width: Metrics.baseDouble,
    height: Metrics.baseDouble,
    borderRadius: Metrics.regular,
    marginRight: Metrics.start,
  },
  commentsStyling: {
    borderRadius: 30,
    backgroundColor: Colors.grey,
    marginLeft: Metrics.start,
  },
});
