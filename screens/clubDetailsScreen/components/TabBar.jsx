import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { useState } from "react";
import ClubDetailsTab from "./ClubDetailsTab";
import UniversityClubsList from "./ClubEventsList";

const TabBar = () => {
  const [clubTab, setClubTab] = useState(true);
  const [eventsTab, setEventsTab] = useState(false);

  const clubTabTrue = () => {
    setClubTab(true);
    setEventsTab(false);
  };
  const eventsTabTrue = () => {
    setEventsTab(true);
    setClubTab(false);
  };

  return (
    <View>
      <View className="flex-row pb-5 ">
        <TouchableOpacity className="flex-1 px-1" onPress={clubTabTrue}>
          <View
            className="rounded-full justify-center items-center"
            style={clubTab ? styles.primaryButton : styles.whiteButton}
          >
            <Text
              className=" font-[TajawalExtraBold] text-lLarge"
              style={clubTab ? { color: "white" } : { color: "#6949FF" }}
            >
              عن النادي
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 px-1" onPress={eventsTabTrue}>
          <View
            className="rounded-full justify-center items-center"
            style={eventsTab ? styles.primaryButton : styles.whiteButton}
          >
            <Text
              className=" font-[TajawalExtraBold] text-lLarge"
              style={eventsTab ? { color: "white" } : { color: "#6949FF" }}
            >
              فعاليات النادي
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {clubTab ? <ClubDetailsTab /> : <UniversityClubsList />}
    </View>
  );
};

export default TabBar;

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
});
