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
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { RootSiblingParent } from "react-native-root-siblings";

import WalkthroughScreen from "./screens/walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "./screens/signUpScreen/SignUpScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
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
import EventsScreen from "./screens/EventsScreen/EventsScreen";

import ClubDetailsScreen from "./screens/clubDetailsScreen/ClubDetailsScreen";
import PopUpModal from "./components/PopUpModal";
import HomeScreenNavigation from "./screens/HomeScreenNavigation";
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
    <>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <HomeScreenNavigation />
    </>
  );
}
