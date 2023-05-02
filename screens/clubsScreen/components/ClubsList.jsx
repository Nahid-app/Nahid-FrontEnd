import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import ClubsCard from "./ClubsCard";
import ClubsData from "./ClubsData";
import { useState } from "react";

const RenderItem = ({ item, navigation }) => {
  return (
    <View className="justify-center content-center pt-4">
      <ClubsCard
        UniversityAvatar={item.UniversityAvatar}
        ClubAvatar={item.ClubAvatar}
        ClubName={item.ClubName}
        StudentRegistered={item.StudentRegistered}
        ClubTypeTitle={item.ClubTypeTitle}
        ClubTypeIcon={item.ClubTypeIcon}
        navigation={navigation}
      />
    </View>
  );
};

const RenderItemMyClubs = ({ item, navigation }) => {
  return item.subscriped === true ? (
    <View className="justify-center content-center pt-4">
      <ClubsCard
        UniversityAvatar={item.UniversityAvatar}
        ClubAvatar={item.ClubAvatar}
        ClubName={item.ClubName}
        StudentRegistered={item.StudentRegistered}
        ClubTypeTitle={item.ClubTypeTitle}
        ClubTypeIcon={item.ClubTypeIcon}
        navigation={navigation}
      />
    </View>
  ) : (
    <View className="bg-primary " />
  );
};

const ClubsList = ({ navigation }) => {
  const [MyClubs, setMyClubs] = useState();

  return (
    <View>
      <View className="flex-row pb-5">
        <TouchableOpacity
          className="flex-1 px-1"
          onPress={() => setMyClubs(true)}
        >
          <View
            className="rounded-full justify-center items-center "
            style={MyClubs ? styles.primaryButton : styles.whiteButton}
          >
            <Text
              className="font-[TajawalExtraBold] text-lLarge "
              style={MyClubs ? styles.whitetext : styles.primarytext}
            >
              أنديتي
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 px-1"
          onPress={() => setMyClubs(false)}
        >
          <View
            className="border rounded-full justify-center items-center "
            style={MyClubs ? styles.whiteButton : styles.primaryButton}
          >
            <Text
              className="font-[TajawalExtraBold] text-lLarge"
              style={MyClubs ? styles.primarytext : styles.whitetext}
            >
              الأندية
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ClubsData}
        renderItem={({ item }) =>
          MyClubs === true ? (
            <RenderItemMyClubs item={item} navigation={navigation} />
          ) : (
            <RenderItem item={item} navigation={navigation} />
          )
        }
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ClubsList;

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
