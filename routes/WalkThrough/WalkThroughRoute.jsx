import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import WalkthroughScreen from "../../screens/walkThroughScreen/WalkthroughScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/loginScreen/LoginScreen";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import SubScreenHeader from "../../components/SubScreenHeader";
import SignUpScreen from "../../screens/signUpScreen/SignUpScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowRightBlack from "../../assets/svg/ArrowRightBlack";
import { MotiText } from "moti";
import Header from "./Header";

const Stack = createNativeStackNavigator();


const WalkThroughRoute = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header title={"الرجوع"} navigation={navigation} />,
      }}
    >
      <Stack.Screen
        name="WalkthroughScreen"
        component={WalkthroughScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="loginScreen"
        component={LoginScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="HomeRoute"
        component={HomeRoute}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default WalkThroughRoute;
