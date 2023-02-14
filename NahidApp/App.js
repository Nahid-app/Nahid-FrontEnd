import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store";
import { Provider } from "react-redux";
import Onboarding from "./components/Onboarding/Onboarding";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryColorButton from "./components/buttons/PrimaryColorButton";
import AppLoading from "expo-app-loading";
import OnBoardingButtonWhite from "./components/buttons/OnBoardingButtonWhite";

function BoardingScreen() {
  return (
    <View className="items-center justify-center bg-white">
      <SafeAreaView>
        <Onboarding />
        <View
          className="flex-col pt-6"
          style={{ borderTopColor: "#F5F5F5", borderTopWidth: 3 }}
        >
          <View className="items-center justify-center">
            <PrimaryColorButton
              title="البدء"
              onPress={() => console.log("pressed")}
              color="white"
            />
          </View>
          <View className="pt-4 items-center justify-center py-3">
            <OnBoardingButtonWhite
              title="تسجيل الدخول"
              onPress={() => console.log("pressed")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BoardingScreen}
            options={{ headerTitle: "", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
