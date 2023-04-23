import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ClubsScreen from "../clubsScreen/ClubsScreen";
import EventsScreen from "../EventsScreen/EventsScreen";
import UniversitiesScreen from "../universitiesScreen/UniversitiesScreen";
import Header from "../../components/Header";
import ProfileRoute from "../../routes/profile/ProfileRoute";
import EventsRoute from "../../routes/events/EventsRoute";
import ClubsRoute from "../../routes/clubs/ClubsRoute";

const Tab = createBottomTabNavigator();

const HomeTabScreen = ({ navigation }) => {
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
      <Tab.Screen name="الأنشطة" component={EventsRoute} />
      <Tab.Screen name="الرئيسية" component={HomeScreen} />
      <Tab.Screen
        name="الأندية"
        component={ClubsRoute}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen name="حسابي" component={ProfileRoute} />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
