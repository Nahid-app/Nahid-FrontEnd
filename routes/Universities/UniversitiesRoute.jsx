import { View, Text } from "react-native";
import React from "react";
import UniversitiesScreen from "../../screens/universitiesScreen/UniversitiesScreen";
import UniversityDetailsScreen from "../../screens/univesityDetailsScreen/UniversityDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClubDetailsScreen from "../../screens/clubDetailsScreen/ClubDetailsScreen";
import EventDetailsScreen from "../../screens/eventDetailsScreen/EventDetailsScreen";
import DetailsRoute from "../DetailsRoute";

const Stack = createNativeStackNavigator();

const UniversitiesRoute = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UniversitiesScreen"
        component={UniversitiesScreen}
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

export default UniversitiesRoute;
