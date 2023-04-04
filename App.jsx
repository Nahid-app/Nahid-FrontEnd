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
import AppLoading from "expo-app-loading";
import { RootSiblingParent } from "react-native-root-siblings";

import WalkthroughScreen from "./screens/walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "./screens/signUpScreen/SignUpScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import UniversitiesScreen from "./screens/universitiesScreen/UniversitiesScreen";
import ActivitiesScreen from "./screens/activitiesScreen/ActivitiesScreen";
import SingleActivityScreen from "./screens/singleActivityScreen/SingleActivityScreen";
import AllClubsScreen from "./screens/AllUniversitiesScreen/AllUniversitiesScreen";

import AppHeader from "./screens/homeScreen/components/AppHeader";
import AllUniversitiesScreen from "./screens/AllUniversitiesScreen/AllUniversitiesScreen";

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
        <Stack.Navigator
          screenOptions={{
            header: () => <AppHeader />,
          }}
        >
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
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerTitle: "",
              headerTransparent: true,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackImageSource: require("./assets/svg/ArrowLeft.svg"),
            }}
          /> */}
          {/* <Stack.Screen
            name="UniversitiesScreen"
            component={UniversitiesScreen}
            options={{
              headerTitle: "جميع الجامعات",
              headerShown: true,
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
          <Stack.Screen
            name="AllUniversitiesScreen"
            component={AllUniversitiesScreen}
            options={{
              headerShown: false,
            }}
          />
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
