import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  I18nManager,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { RootSiblingParent } from "react-native-root-siblings";

import WalkthroughScreen from "./screens/walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "./screens/signUpScreen/SignUpScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import ActivitiesScreen from "./screens/activitiesScreen/ActivitiesScreen";
import SingleActivityScreen from "./screens/singleActivityScreen/SingleActivityScreen";
import ProfileScreen from "./screens/profileScreen/ProfileScreen";
import ProfileEditingScreen from "./screens/profileEditingScreen.jsx/profileEditingScreen";
import SubScreenHeader from "./components/SubScreenHeader";
import EventDetailsScreen from "./screens/eventDetailsScreen/EventDetailsScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "./assets/svg/Logo";
import MagnifyingGlass from "./assets/svg/MagnifyingGlass";
import Notification from "./assets/svg/Notification";
import Header from "./components/Header";
import UniversityDetailsScreen from "./screens/univesityDetailsScreen/UniversityDetailsScreen";

const Stack = createNativeStackNavigator();
const shouldBeRTL = true;

if (shouldBeRTL !== I18nManager.isRTL && Platform.OS !== "web") {
  I18nManager.allowRTL(shouldBeRTL);
  I18nManager.forceRTL(shouldBeRTL);
  Updates.reloadAsync();
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Tajawal: require("./assets/fonts/Tajawal-Black.ttf"),
    TajawalBold: require("./assets/fonts/Tajawal-Bold.ttf"),
    TajawalExtraBold: require("./assets/fonts/Tajawal-ExtraBold.ttf"),
    TajawalLight: require("./assets/fonts/Tajawal-Light.ttf"),
    TajawalMedium: require("./assets/fonts/Tajawal-Medium.ttf"),
    TajawalRegular: require("./assets/fonts/Tajawal-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
              name="WalkthroughScreen"
              component={WalkthroughScreen}
              options={{
                headerTitle: "",
                headerTransparent: false,
                headerShadowVisible: false,
              }}
            />*/}
          {/* <Stack.Screen
            name="signUpScreen"
            component={SignUpScreen}
            options={{
              headerTitle: "",
              headerTransparent: false,
              headerShadowVisible: false,
              headerTintColor: "black",
              headerBackTitleVisible: false,
              headerBackImageSource: require("./assets/svg/ArrowLeft.svg"),
            }}
          /> */}
          {/* 
            <Stack.Screen
              name="loginScreen"
              component={LoginScreen}
              options={{
                headerTitle: "",
                headerTransparent: false,
                headerShadowVisible: false,
                headerTintColor: "black",
                headerBackTitleVisible: false,
                headerBackImageSource: require("./assets/svg/ArrowLeft.svg"),
              }}
            /> */}
          {/* <Stack.Screen
            name="UniversitiesScreen"
            component={UniversitiesScreen}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="UniversityDetailsScreen"
            component={UniversityDetailsScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              headerShown: false,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitleStyle: { color: "#6949FF" },
              headerTitleAlign: Platform.OS === "android" ? "center" : "",
            }}
          /> */}
          {/* <Stack.Screen
            name="ProfileEditingScreen"
            component={ProfileEditingScreen}
            options={{
              headerShown: false,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitleStyle: { color: "#6949FF" },
              headerTitleAlign: Platform.OS === "android" ? "center" : "",
            }}
          /> */}
          {/* <Stack.Screen
            name="ActivitiesScreen"
            component={ActivitiesScreen}
            options={{
              headerTitle: "جميع الأنشطة",
              headerShown: true,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitleStyle: { color: "#6949FF" },
              headerTitleAlign: Platform.OS === "android" ? "center" : "",
            }}
          />
          <Stack.Screen
            name="SingleActivityScreen"
            component={SingleActivityScreen}
            options={{
              headerTitle: "hello",
              headerShown: true,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitleStyle: { color: "#6949FF" },
              headerTitleAlign: Platform.OS === "android" ? "center" : "",
            }}
          /> */}
        </Stack.Navigator>
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
      </NavigationContainer>
    </RootSiblingParent>
  );
}
