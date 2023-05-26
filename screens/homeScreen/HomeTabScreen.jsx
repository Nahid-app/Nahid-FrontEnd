import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileRoute from "../../routes/profile/ProfileRoute";
import EventsRoute from "../../routes/events/EventsRoute";
import ClubsRoute from "../../routes/Clubs/ClubsRoute";
import UniversitiesRoute from "../../routes/Universities/UniversitiesRoute";
import HomeRoute from "../../routes/Home/HomeRoute";
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
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#35383F",
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarStyle: {
          display: getRouteName(route),
          backgroundColor: "white",
          // position: "absolute",
          paddingTop: 12,
          paddingBottom: 12,
          borderTopEndRadius: 12,
          borderTopStartRadius: 12,
          height: 60,
          zIndex: 999,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "TajawalMedium",
          fontSize: 11,
          paddingTop: 8,
        },
      })}
    >
      <Tab.Screen
        name="universities"
        component={UniversitiesRoute}
        options={({ route }) => ({
          tabBarLabel: "الجامعات",
          tabBarIcon: ({ focused }) =>
            focused ? <UniversitiesIconBold /> : <UniversitiesIconBorder />,
        })}
      />
      <Tab.Screen
        name="events"
        component={EventsRoute}
        options={({ route }) => ({
          tabBarLabel: "الأنشطة",
          tabBarIcon: ({ focused }) =>
            focused ? <EventsIconBold /> : <EventsIconBorder />,
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeRoute}
        options={({ route }) => ({
          tabBarLabel: "الرئيسية",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIconBold /> : <HomeIconBorder />,
        })}
      />
      <Tab.Screen
        name="clubs"
        component={ClubsRoute}
        options={({ route }) => ({
          tabBarLabel: "الأندية",
          tabBarIcon: ({ focused }) =>
            focused ? <ClubsIconBold /> : <ClubsIconBorder />,
        })}
      />
      <Tab.Screen
        name="profile"
        component={ProfileRoute}
        options={({ route }) => ({
          tabBarLabel: "حسابي",
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileIconBold /> : <ProfileIconBorder />,
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
    routeName?.includes("NewEventScreen") ||
    routeName?.includes("ProfileEditingScreen")
  ) {
    return "none";
  } else {
    return "flex";
  }
};
export default HomeTabScreen;
