import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughRoute from "../routes/WalkThrough/WalkThroughRoute";
import EventsScreen from "./EventsScreen/EventsScreen";
import EventDetailsScreen from "./eventDetailsScreen/EventDetailsScreen";
import SubScreenHeader from "../components/SubScreenHeader";
import WalkthroughScreen from "./walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "./signUpScreen/SignUpScreen";
import LoginScreen from "./loginScreen/LoginScreen";
import HomeTabScreen from "./homeScreen/HomeTabScreen";
import { AuthProvider } from "../context/AuthProvider";

const Stack = createNativeStackNavigator();

const StartingRoute = ({ navigation }) => {
  return (
    <NavigationContainer>
      <WalkthroughRoute />
    </NavigationContainer>
  );
};

export default StartingRoute;
