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
import UniversitiesRoute from "../../routes/Universities/UniversitiesRoute";
import HomeRoute from "../../routes/home/HomeRoute";
import Group from "../../assets/svg/Group";
import ArrowRightBlack from "../../assets/svg/ArrowRightBlack";
import Calendar from "../../assets/svg/Calendar";
import ProfileIconBold from "../../assets/homeIcons/ProfileIconBold";
import ProfileIconBorder from "../../assets/homeIcons/ProfileIconBorder";
import UniversitiesIconBorder from "../../assets/homeIcons/UniversitiesIconBorder";
import UniversitiesIconBold from "../../assets/homeIcons/UniversitiesIconBold";
import HomeIconBold from "../../assets/homeIcons/HomeIconBold";
import HomeIconBorder from "../../assets/homeIcons/HomeIconBorder";
import EventsIconBold from "../../assets/homeIcons/EventsIconBold";
import EventsIconBorder from "../../assets/homeIcons/EventsIconBorder";
import ClubsIconBold from "../../assets/homeIcons/ClubsIconBold";
import ClubsIconBorder from "../../assets/homeIcons/ClubsIconBorder";

const Tab = createBottomTabNavigator();

const HomeTabScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="الرئيسية"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="الجامعات"
        component={UniversitiesRoute}
        options={{
          tabBarLabel: "حسابي",
          tabBarIcon: ({ focused }) =>
            focused ? <UniversitiesIconBold /> : <UniversitiesIconBorder />,
        }}
      />
      <Tab.Screen
        name="الأنشطة"
        component={EventsRoute}
        options={{
          tabBarLabel: "حسابي",
          tabBarIcon: ({ focused }) =>
            focused ? <EventsIconBold /> : <EventsIconBorder />,
        }}
      />
      <Tab.Screen
        name="الرئيسية"
        component={HomeRoute}
        options={{
          tabBarLabel: "حسابي",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIconBold /> : <HomeIconBorder />,
        }}
      />
      <Tab.Screen
        name="الأندية"
        component={ClubsRoute}
        options={{
          tabBarLabel: "حسابي",
          tabBarIcon: ({ focused }) =>
            focused ? <ClubsIconBold /> : <ClubsIconBorder />,
        }}
      />
      <Tab.Screen
        name="حسابي"
        component={ProfileRoute}
        options={{
          tabBarLabel: "حسابي",
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileIconBold /> : <ProfileIconBorder />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
