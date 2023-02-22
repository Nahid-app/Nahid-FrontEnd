import * as React from "react";
import { View, Text, StatusBar, Image, I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { RootSiblingParent } from 'react-native-root-siblings';


import WalkthroughScreen from "./screens/WalkthroughScreen";
import SignUpScreen from "./screens/signUpScreen/SignUpScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";

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
    return <AppLoading />;
  }

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="WalkthroughScreen"
              component={WalkthroughScreen}
              options={{
                headerTitle: "",
                headerTransparent: false,
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen
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
            />
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
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerTitle: "",
                headerTransparent: false,
                headerShadowVisible: false,
                headerTintColor: "black",
                headerBackTitleVisible: false,
                headerBackImageSource: require("./assets/svg/ArrowLeft.svg"),
              }}
            />
          </Stack.Navigator>
        </Provider>
        <StatusBar animated={true} barStyle={"dark-content"} />
      </NavigationContainer>
    </RootSiblingParent>
  );
}
