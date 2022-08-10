import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import Friend from "../screens/Friend";
import Home from "../screens/Home";
import Message from "../screens/Message";
import Notification from "../screens/Notification";
import Videos from "../screens/Videos";
import Pages from "./../screens/Pages";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friend" component={Friend} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="Pages" component={Pages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
