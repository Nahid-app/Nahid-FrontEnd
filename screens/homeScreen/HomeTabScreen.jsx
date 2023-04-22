import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ClubsScreen from "../clubsScreen/ClubsScreen";
import EventsScreen from "../EventsScreen/EventsScreen";
import UniversitiesScreen from "../universitiesScreen/UniversitiesScreen";
import Header from "../../components/Header";
import ProfileRoute from "../../routes/profile/ProfileRoute";

const Tab = createBottomTabNavigator();

const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="الرئيسية"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="الجامعات"
        component={UniversitiesScreen}
        options={{ component: () => <Header /> }}
      />
      <Tab.Screen name="الأنشطة" component={EventsScreen} />
      <Tab.Screen name="الرئيسية" component={HomeScreen} />
      <Tab.Screen name="الأندية" component={ClubsScreen} />
      <Tab.Screen name="حسابي" component={ProfileRoute} />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
