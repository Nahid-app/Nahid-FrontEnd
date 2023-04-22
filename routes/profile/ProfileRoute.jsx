import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screens/profileScreen/ProfileScreen";
import ProfileEditingScreen from "../../screens/profileEditingScreen.jsx/profileEditingScreen";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const ProfileRoute = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header title={"الرجوع"} navigation={navigation} />,
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileEditingScreen"
        component={ProfileEditingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileRoute;
