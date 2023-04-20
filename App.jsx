import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  I18nManager,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import { RootSiblingParent } from "react-native-root-siblings";
import Navigation from "./screens/Navigation";

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
      <Navigation />
    </>
  );
}
