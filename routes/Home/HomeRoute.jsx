import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../../screens/homeScreen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetailsScreen from "../../screens/eventDetailsScreen/EventDetailsScreen";
import ClubDetailsScreen from "../../screens/clubDetailsScreen/ClubDetailsScreen";
import EventsScreen from "../../screens/EventsScreen/EventsScreen";
import ClubsScreen from "../../screens/clubsScreen/ClubsScreen";
import EventsRoute from "../events/EventsRoute";
import SearchBarComponent from "../../components/SearchBarComponent";
import BlackRightArrow from "../../assets/svg/BlackRightArrow";
import DetailsRoute from "../DetailsRoute";

const Stack = createNativeStackNavigator();

const HomeRoute = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailsRoute"
        component={DetailsRoute}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoute;
