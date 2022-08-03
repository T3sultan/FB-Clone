import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, Metrics } from "../theme";
import { USERS } from "./../data/Users";
import CustomText from "../common/CustomText";

const Stories = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            style={styles.storStyle}
            source={{
              uri: "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/277506146_1069221550294421_85169739104812418_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEaVOed4QjBErdFdwTmrf_3CZLRKZ6RAHgJktEpnpEAeF-y4fYrpxm1Azqb8xXzKniKZexsQGU0yNQzXF1QUWWV&_nc_ohc=wQaSInNaCZsAX8n3GiA&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT8kHsqpGZSpRNEl-GOd6-V4ug-pQsBS5ed3ioN1Zub5qg&oe=62EF6517",
            }}
          />
        </View>
        {USERS.map((story, index) => (
          <View key={index} style={{ position: "relative" }}>
            <Image
              style={styles.storStyle}
              source={{ uri: story.upload_img }}
            />
            <Image
              style={styles.profileStyling}
              source={{ uri: story.profile_img }}
            />
            <CustomText style={styles.text}>
              {story.name.length > 15
                ? story.name.slice(0, 15) + "..."
                : story.name}
            </CustomText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyStyle: {
    width: Metrics.OneH,
    height: 170,
    resizeMode: "contain",
  },
  storStyle: {
    width: Metrics.OneH,
    height: 170,
    marginHorizontal: Metrics.start,
    borderRadius: Metrics.halfBase,
  },
  profileStyling: {
    width: Metrics.baseDouble,
    height: Metrics.baseDouble,
    borderRadius: Metrics.regular,
    borderColor: Colors.white,
    borderWidth: 2,
    position: "absolute",
    top: Metrics.start,
    left: Metrics.halfBase,
  },
  text: {
    position: "absolute",
    left: Metrics.halfBase,
    bottom: Metrics.start,
    color: Colors.white,
  },
});
