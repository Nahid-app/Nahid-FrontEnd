import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileEditingHeader from "./components/ProfileEditingHeader";
import EventInputFields from "./components/EventInputFields";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import DropDownLists from "./components/DropDownLists";
import BannerImage from "../profileScreen/components/BannerImage";
import EventCarouselBanner from "./components/EventCarouselBanner";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import SubScreenHeader from "../../components/SubScreenHeader";
import { useContext } from "react";
import { ClubsContext } from "../../context/ClubsProvider";
import { useEffect } from "react";
import { EventsContext } from "../../context/EventsProvider";
import { daysInWeek } from "date-fns";
import { AuthContext } from "../../context/AuthProvider";

export default function NewEventScreen({ navigation }) {
  const { isLoading, clubs, GETClubs } = useContext(ClubsContext);
  const { POSTEvents } = useContext(EventsContext);
  const { user, GETUser } = useContext(AuthContext);

  const [image, setImage] = useState();
  const [clubId, setClubId] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [eventType, setEventType] = useState();
  const [genderTarget, setGenderTarget] = useState();
  const [registrationDeadline, setRegistrationDeadline] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const imageHandler = (data) => {
    setimage(data);
    console.log(data);
  };

  const clubIdHandler = (data) => {
    setClubId(data);
    console.log(data);
  };

  const titleHandler = (data) => {
    setTitle(data);
    console.log(data);
  };

  const descriptionHandler = (data) => {
    setDescription(data);
    console.log(data);
  };

  const eventTypeHandler = (data) => {
    setEventType(data);
    console.log(data);
  };

  const genderTargetHandler = (data) => {
    setGenderTarget(data);
    console.log(data);
  };

  const registrationDeadlineHandler = (data) => {
    setRegistrationDeadline(data);
    console.log(data);
  };

  const startTimeHandler = (data) => {
    setStartTime(data);
    console.log(data);
  };

  const endTimeHandler = (data) => {
    setEndTime(data);
    console.log(data);
  };

  useEffect(() => {
    getUserData();
    // console.log(clubs);
  }, []);

  function getUserData() {
    GETClubs();
  }

  function handleSubmitEvent() {
    const newEvent = {
      clubId: 1,
      title: "title",
      description: "description",
      eventType: 2,
      genderTarget: 2,
      registrationDeadline: "2023-12-03 11:00:00",
      startTime: "2023-12-03 11:00:00",
      endTime: "2023-12-03 11:00:00",
    };
    console.log(newEvent);
    POSTEvents(newEvent);
  }

  return (
    <View className="bg-white flex-1 px-6 pt-5">
      {/* Event Editing Header */}
      <SubScreenHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Event Image */}
        <EventCarouselBanner imageHandler={imageHandler} />
        {/* Divider */}
        <View className="w-full bg-gray300 h-px mt-6"></View>
        {/* Event Info Form */}
        <EventInputFields
          titleHandler={titleHandler}
          descriptionHandler={descriptionHandler}
          registrationDeadlineHandler={registrationDeadlineHandler}
          startTimeHandler={startTimeHandler}
          endTimeHandler={endTimeHandler}
        />
        {/* Dropdown List */}
        <DropDownLists
          clubs={clubs}
          genderTargetHandler={genderTargetHandler}
          eventTypeeHandler={eventTypeHandler}
          clubIdHandler={clubIdHandler}
        />
        {/* Event Creation Button */}
        <View className="pb-2">
          <View style={styles.buttonContainer} className="w-full">
            <TouchableOpacity
              onPress={handleSubmitEvent}
              className="flex-row justify-center items-center py-5 px-4 bg-primary"
              style={styles.button}
            >
              <Text className="text-white font-[TajawalMedium]">
                أضف فعالية جديدة
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderBottomLeftRadius: 35,
    borderBottomEndRadius: 35,
    borderBottomWidth: 6,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    borderColor: "#543ACC",
    borderRadius: 100,
  },
});
