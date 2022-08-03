import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors, Metrics } from "../theme";
import { Feather } from "@expo/vector-icons";
import metrics from "../theme/metrics";

const NavBarTab = ({ navigation }) => {
  return (
    <View style={{ marginTop: metrics.halfBase }}>
      <View style={[styles.wrapper]}>
        <TouchableOpacity>
          <Image
            style={styles.homeStyle}
            source={require("../../assets/icons/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.homeStyle}
            source={require("../../assets/headerIcon/icons8-user-32.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/headerIcon/icons8-facebook-messenger-24.png")}
            style={styles.homeStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/headerIcon/icons8-notification-50.png")}
            style={styles.homeStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/headerIcon/icons8-youtube-24.png")}
            style={styles.homeStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/headerIcon/icons8-page-64.png")}
            style={styles.homeStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBarTab;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#05050538",
    borderBottomWidth: 0.8,
    marginTop: Metrics.start,
  },
  homeStyle: {
    width: Metrics.fb,
    height: Metrics.fb,
    resizeMode: "contain",
  },
});
