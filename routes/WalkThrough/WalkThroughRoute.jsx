import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughScreen from "../../screens/walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "../../screens/signUpScreen/SignUpScreen";
import LoginScreen from "../../screens/loginScreen/LoginScreen";
import HomeTabScreen from "../../screens/homeScreen/HomeTabScreen";

const Stack = createNativeStackNavigator();

const WalkthroughRoute = ({ navigation }) => {
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="loginScreen"
        component={LoginScreen}
        headerShown={false}
        options={{ headerShown: false }}
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
