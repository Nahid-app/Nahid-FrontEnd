import { View, Text } from "react-native";
import React from "react";
import UniversityDetailsScreen from "../screens/univesityDetailsScreen/UniversityDetailsScreen";
import EventDetailsScreen from "../screens/eventDetailsScreen/EventDetailsScreen";
import ClubDetailsScreen from "../screens/clubDetailsScreen/ClubDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DetailsRoute = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UniversityDetailsScreen"
        component={UniversityDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClubDetailsScreen"
        component={ClubDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventDetailsScreen"
        component={EventDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DetailsRoute;
