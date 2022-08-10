import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import CustomText from "./src/common/CustomText";
import Home from "./src/screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "EncodedSans-Bold": require("./assets/fonts/EncodeSans-Bold.ttf"),
    "EncodedSans-Regular": require("./assets/fonts/EncodeSans-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return <Home />;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
