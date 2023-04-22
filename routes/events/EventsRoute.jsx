import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header";
import EventsScreen from "../../screens/EventsScreen/EventsScreen";
import EventDetailsScreen from "../../screens/eventDetailsScreen/EventDetailsScreen";
import SubScreenHeader from "../../components/SubScreenHeader";

const Stack = createNativeStackNavigator();

const EventsRoute = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventsDetailsScreen"
        component={EventDetailsScreen}
        options={{
          headerShown: false,
          header: () => <SubScreenHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default EventsRoute;
