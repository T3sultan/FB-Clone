import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Metrics } from "../theme";

const PostOption = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/277506146_1069221550294421_85169739104812418_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEaVOed4QjBErdFdwTmrf_3CZLRKZ6RAHgJktEpnpEAeF-y4fYrpxm1Azqb8xXzKniKZexsQGU0yNQzXF1QUWWV&_nc_ohc=FVpxEHP-R2oAX9TkSCi&tn=wka66j603PSDG-DG&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT9S-SVTArJmIsHVgdG7ML1DoEADhWc2Od-FVhg1Z5Leeg&oe=62F94857",
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.placeStyle}
              source={require("../../assets/placeholder.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.photo}
              source={require("../../assets/photo.jpg")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: -Metrics.base }}>
        <TouchableOpacity>
          <Image
            style={styles.activity}
            source={require("../../assets/activity.jpg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostOption;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.halfBase,
    marginTop: Metrics.halfBase,
  },
  profileImage: {
    width: Metrics.baseDouble,
    height: Metrics.baseDouble,
    borderRadius: Metrics.regular,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  placeStyle: {
    width: Metrics.splashWidth,
    height: Metrics.regular,
    resizeMode: "contain",
  },
  photo: {
    width: Metrics.regular,
    height: Metrics.regular,
    resizeMode: "contain",
  },
  activity: {
    width: "100%",
    resizeMode: "contain",
  },
});
