import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header";
import EventsScreen from "../../screens/EventsScreen/EventsScreen";
import EventDetailsScreen from "../../screens/eventDetailsScreen/EventDetailsScreen";
import SubScreenHeader from "../../components/SubScreenHeader";
import ClubsScreen from "../../screens/clubsScreen/ClubsScreen";
import ClubDetailsScreen from "../../screens/clubDetailsScreen/ClubDetailsScreen";
import DetailsRoute from "../detailsRoute/DetailsRoute";

const Stack = createNativeStackNavigator();

const ClubsRoute = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="ClubsScreen"
        component={ClubsScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="DetailsRoute"
        component={DetailsRoute}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
    </Stack.Navigator>
  );
};

export default ClubsRoute;
