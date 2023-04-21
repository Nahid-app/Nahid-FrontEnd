import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent } from "react-native-root-siblings";
import ClubDetailsScreen from "./clubDetailsScreen/ClubDetailsScreen";
import HomeTabScreen from "./homeScreen/HomeTabScreen";
import WalkthroughScreen from "./walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "./signUpScreen/SignUpScreen";
import LoginScreen from "./loginScreen/LoginScreen";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name="HomeScreen"
          component={HomeTabScreen}
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitleStyle: { color: "#6949FF" },
            headerTitleAlign: Platform.OS === "android" ? "center" : "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
