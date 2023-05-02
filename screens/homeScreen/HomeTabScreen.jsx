import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ClubsScreen from "../clubsScreen/ClubsScreen";
import EventsScreen from "../EventsScreen/EventsScreen";
import UniversitiesScreen from "../universitiesScreen/UniversitiesScreen";
import Header from "../../components/Header";
import ProfileRoute from "../../routes/profile/ProfileRoute";
import EventsRoute from "../../routes/events/EventsRoute";
import ClubsRoute from "../../routes/Clubs/ClubsRoute";
import UniversitiesRoute from "../../routes/Universities/UniversitiesRoute";
import HomeRoute from "../../routes/Home/HomeRoute";
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
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeTabScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "TajawalMedium",
        },
        tabBarActiveTintColor: "#212121",
      }}
    >
      <Tab.Screen
        name="universities"
        component={UniversitiesRoute}
        options={({ route }) => ({
          tabBarLabel: "الجامعات",
          tabBarIcon: ({ focused }) =>
            focused ? <UniversitiesIconBold /> : <UniversitiesIconBorder />,
          tabBarStyle: {
            display: getRouteName(route),
          },
        })}
      />
      <Tab.Screen
        name="events"
        component={EventsRoute}
        options={({ route }) => ({
          tabBarLabel: "الأنشطة",
          tabBarIcon: ({ focused }) =>
            focused ? <EventsIconBold /> : <EventsIconBorder />,
          tabBarStyle: {
            display: getRouteName(route),
          },
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeRoute}
        options={({ route }) => ({
          tabBarLabel: "الرئيسية",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIconBold /> : <HomeIconBorder />,
          tabBarStyle: {
            display: getRouteName(route),
          },
        })}
      />
      <Tab.Screen
        name="clubs"
        component={ClubsRoute}
        options={({ route }) => ({
          tabBarLabel: "الأندية",
          tabBarIcon: ({ focused }) =>
            focused ? <ClubsIconBold /> : <ClubsIconBorder />,
          tabBarStyle: {
            display: getRouteName(route),
          },
        })}
      />
      <Tab.Screen
        name="profile"
        component={ProfileRoute}
        options={({ route }) => ({
          tabBarLabel: "حسابي",
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileIconBold /> : <ProfileIconBorder />,
          tabBarStyle: {
            display: getRouteName(route),
          },
        })}
      />
    </Tab.Navigator>
  );
};
const getRouteName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  // console.log(routeName);
  if (
    routeName?.includes("DetailsRoute") ||
    routeName?.includes("ProfileEditingScreen")
  ) {
    return "none";
  } else {
    return "flex";
  }
};
export default HomeTabScreen;
