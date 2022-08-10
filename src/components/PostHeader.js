import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, Metrics } from "../theme";
import CustomText from "../common/CustomText";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.profile_imgStyle}
          source={{ uri: post.profile_img }}
        />
        <View style={{ marginLeft: Metrics.start, justifyContent: "center" }}>
          <CustomText black>{post.username}</CustomText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText small>{post.time}</CustomText>
            <Image
              style={{
                width: Metrics.halfBase,
                height: Metrics.halfBase,
                marginLeft: Metrics.start,
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/44/44386.png",
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <CustomText fontWeight>...</CustomText>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  profile_imgStyle: {
    width: Metrics.baseDouble,
    height: Metrics.baseDouble,
    borderRadius: Metrics.regular,
    borderColor: Colors.black,
    borderWidth: 2,
  },
  wrapper: {
    flexDirection: "row",
    //     marginLeft: Metrics.halfBase,
  },
});
