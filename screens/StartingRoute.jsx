import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsScreen from "./EventsScreen/EventsScreen";
import EventDetailsScreen from "./eventDetailsScreen/EventDetailsScreen";
import SubScreenHeader from "../components/SubScreenHeader";
import WalkthroughScreen from "./walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "./signUpScreen/SignUpScreen";
import LoginScreen from "./loginScreen/LoginScreen";
import HomeTabScreen from "./homeScreen/HomeTabScreen";

const Stack = createNativeStackNavigator();

const StartingRoute = ({ navigation }) => {
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

export default StartingRoute;
