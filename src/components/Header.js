import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../common/CustomText";
import { Metrics } from "../theme";
import {} from "react-native-web";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.fbStyling}
            source={require("../../assets/header/logo.jpg")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <Image
            style={styles.searchStyle}
            source={require("../../assets/header/search.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.searchStyle}
            source={require("../../assets/header/navbar.jpg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Metrics.halfBase,
  },
  fbStyling: {
    width: Metrics.fbHeader,
    height: Metrics.regular,
    resizeMode: "contain",
  },
  searchStyle: {
    width: Metrics.regular,
    height: Metrics.regular,
    resizeMode: "contain",
  },
  wrapper: {
    flexDirection: "row",
  },
});
