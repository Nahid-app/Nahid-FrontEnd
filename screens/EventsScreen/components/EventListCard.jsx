import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import EventCard from "./EventCard";
import { MotiView } from "moti";
import { useState } from "react";
import data from "../data";

const RenderItem = ({ item, navigation }) => {
  return (
    <EventCard
      avatarUrl={item.avatarUrl}
      clubName={item.clubName}
      title={item.title}
      daysLeft={item.daysLeft}
      location={"الجبيل"}
      imageUrl={item.imageUrl}
      navigation={navigation}
    />
  );
};
const RenderItemMyEvents = ({ item, navigation }) => {
  return item.registered === true ? (
    <EventCard
      avatarUrl={item.avatarUrl}
      clubName={item.clubName}
      title={item.title}
      daysLeft={item.daysLeft}
      location={"الجبيل"}
      imageUrl={item.imageUrl}
      registered={item.registered}
      navigation={navigation}
    />
  ) : (
    <View className="bg-primary" />
  );
};
const EventListCard = ({ navigation }) => {
  const [MyEvents, setMyEvents] = useState();
  return (
    <>
      <MotiView
        from={{
          translateY: -10,
        }}
        animate={{
          translateY: 0,
        }}
        className="w-full flex-row justify-evenly pb-4"
      >
        <TouchableOpacity
          className="flex-1 px-1 pb-4"
          onPress={() => setMyEvents(true)}
        >
          <View
            className="rounded-full justify-center items-center "
            style={MyEvents ? styles.primaryButton : styles.whiteButton}
          >
            <Text
              className="font-[TajawalExtraBold] text-lLarge "
              style={MyEvents ? styles.whitetext : styles.primarytext}
            >
              أنشطتي
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 px-1"
          onPress={() => setMyEvents(false)}
        >
          <View
            className="border rounded-full justify-center items-center "
            style={MyEvents ? styles.whiteButton : styles.primaryButton}
          >
            <Text
              className="font-[TajawalExtraBold] text-lLarge"
              style={MyEvents ? styles.primarytext : styles.whitetext}
            >
              الأنشطة
            </Text>
          </View>
        </TouchableOpacity>
      </MotiView>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          MyEvents == true ? (
            <RenderItemMyEvents item={item} navigation={navigation} />
          ) : (
            <RenderItem item={item} navigation={navigation} />
          )
        }
        keyExtractor={(item) => item.id}

      />
    </>
  );
};

export default EventListCard;

const styles = StyleSheet.create({
  whiteButton: {
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "#6949FF",
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
  },
  primaryButton: {
    borderWidth: 2,
    backgroundColor: "#6949FF",
    borderColor: "#6949FF",
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
  },
  primarytext: {
    color: "#6949FF",
    paddingVertical: Platform.OS === "ios" ? 4 : null,
  },
  whitetext: {
    color: "white",
    paddingVertical: Platform.OS === "ios" ? 4 : null,
  },
});
