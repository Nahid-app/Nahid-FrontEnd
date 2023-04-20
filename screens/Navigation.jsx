import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent } from "react-native-root-siblings";
import ClubDetailsScreen from "./clubDetailsScreen/ClubDetailsScreen";
import HomeTabScreen from "./homeScreen/HomeTabScreen";
import SignUpScreen from "./signUpScreen/SignUpScreen";
import LoginScreen from "./loginScreen/LoginScreen";
import WalkthroughScreen from "./walkThroughScreen/WalkthroughScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <RootSiblingParent>
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
              headerTitle: "hello",
              headerShown: false,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitleStyle: { color: "#6949FF" },
              headerTitleAlign: Platform.OS === "android" ? "center" : "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default Navigation;
