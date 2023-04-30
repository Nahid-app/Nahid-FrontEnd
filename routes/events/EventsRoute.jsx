import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header";
import EventsScreen from "../../screens/EventsScreen/EventsScreen";
import EventDetailsScreen from "../../screens/eventDetailsScreen/EventDetailsScreen";
import SubScreenHeader from "../../components/SubScreenHeader";
import DetailsRoute from "../DetailsRoute";

const Stack = createNativeStackNavigator();

const EventsRoute = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailsRoute"
        component={DetailsRoute}
        headerShown={false}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default EventsRoute;
