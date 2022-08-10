import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors, Metrics } from "../theme";

const CommentFooter = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.wrapper}
        source={{
          uri: "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/277506146_1069221550294421_85169739104812418_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEaVOed4QjBErdFdwTmrf_3CZLRKZ6RAHgJktEpnpEAeF-y4fYrpxm1Azqb8xXzKniKZexsQGU0yNQzXF1QUWWV&_nc_ohc=FVpxEHP-R2oAX9TkSCi&tn=wka66j603PSDG-DG&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT9S-SVTArJmIsHVgdG7ML1DoEADhWc2Od-FVhg1Z5Leeg&oe=62F94857",
        }}
      />
      <TextInput placeholder="Write your comment..." style={styles.comments} />
      <Image
        style={styles.photoStyle}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3342/3342137.png",
        }}
      />
    </View>
  );
};

export default CommentFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Metrics.start,
  },
  wrapper: {
    width: Metrics.baseDouble,
    height: Metrics.baseDouble,
    borderRadius: Metrics.regular,
  },
  comments: {
    marginLeft: Metrics.base,
    borderColor: Colors.grey,
    height: Metrics.doubleBase,
    width: "85%",
    position: "relative",
  },
  photoStyle: {
    position: "absolute",
    right: Metrics.base,
    top: Metrics.halfBase,
    width: Metrics.base,
    height: Metrics.base,
    opacity: 0.7,
  },
});
