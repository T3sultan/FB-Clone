import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors, Metrics } from "../theme";
import CustomText from "../common/CustomText";

const PostReact = ({ post }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.reactsStyle}
            source={require("../../assets/reacts/like.png")}
          />
        </TouchableOpacity>
        <CustomText style={{ marginLeft: Metrics.start }}>
          {post.likes}
        </CustomText>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.reactsStyle}
            source={require("../../assets/reacts/comment.png")}
          />
        </TouchableOpacity>
        <CustomText style={{ marginLeft: Metrics.start }}>
          {post.comments.length}
        </CustomText>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.reactsStyle}
            source={require("../../assets/reacts/share.png")}
          />
        </TouchableOpacity>
        <CustomText style={{ marginLeft: Metrics.start }}>
          {post.share}
        </CustomText>
      </View>
    </View>
  );
};

export default PostReact;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: Metrics.OneH,
    height: Metrics.doubleBase,
    borderRadius: Metrics.baseDouble,
    backgroundColor: Colors.grey,
    justifyContent: "center",
    marginTop: Metrics.start,
    //     marginLeft: Metrics.start,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reactsStyle: {
    width: Metrics.base,
    height: Metrics.base,
    resizeMode: "contain",
  },
});
