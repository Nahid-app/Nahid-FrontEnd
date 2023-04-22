import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsScreen from "./EventsScreen/EventsScreen";
import EventDetailsScreen from "./eventDetailsScreen/EventDetailsScreen";
import SubScreenHeader from "../components/SubScreenHeader";

const Stack = createNativeStackNavigator();

const StartingRoute = ({ navigation }) => {
  return (
    <NavigationContainer>
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
            headerShown: false ,
            header: () => <SubScreenHeader navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StartingRoute;
