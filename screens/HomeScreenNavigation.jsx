import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent } from "react-native-root-siblings";
import ClubDetailsScreen from "./clubDetailsScreen/ClubDetailsScreen";

const Stack = createNativeStackNavigator();
const HomeScreenNavigation = () => {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ClubDetailsScreen"
            component={ClubDetailsScreen}
            options={{
              headerTitle: "hello",
              headerShown: false,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitleStyle: { color: "#6949FF" },
              headerTitleAlign: Platform.OS === "android" ? "center" : "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default HomeScreenNavigation;
