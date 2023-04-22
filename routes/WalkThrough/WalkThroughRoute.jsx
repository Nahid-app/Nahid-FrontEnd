import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabScreen from "./homeScreen/HomeTabScreen";
import SignUpScreen from "./signUpScreen/SignUpScreen";
import LoginScreen from "./loginScreen/LoginScreen";
import WalkthroughScreen from "../../screens/walkThroughScreen/WalkthroughScreen";

const Stack = createNativeStackNavigator();

const WalkthroughRoute = () => {
  return (
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
  );
};

export default WalkthroughRoute;
