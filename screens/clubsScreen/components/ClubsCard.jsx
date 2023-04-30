import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { MotiView } from "moti";
import PrimaryButton from "../../../components/PrimaryButton";
import { CommonActions } from "@react-navigation/native";

const ClubsCard = ({
  UniversityAvatar,
  ClubAvatar,
  ClubName,
  StudentRegistered,
  ClubTypeTitle,
  ClubTypeIcon,
  navigation,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailsRoute", { screen: "ClubDetailsScreen" })
        }
      >
        <MotiView
          from={{
            translateY: -10,
          }}
          animate={{
            translateY: 0,
          }}
          className="flex-1 flex-row rounded-2xl px-3 py-4 items-center "
          style={styles.CardsBorder}
        >
          <View className="mr-5">
            <Image
              source={ClubAvatar}
              resizeMode="contain"
              style={styles.clubAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
            <Image
              source={UniversityAvatar}
              resizeMode="contain"
              style={styles.universityAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
          </View>
          <View className="flex-col items-start h-14 justify-center flex-grow flex-shrink">
            <Text className="text-h6 font-[TajawalBold] py-1 items-start ">
              {ClubName}
            </Text>
            {/* uni avatar */}
            <View className="flex-row items-center ">
              {/* uni name */}
              <View className="items-center justify-center flex-row text-center ">
                <View className="justify-center align-middle items-end ">
                  <View className="items-center justify-center ">
                    {ClubTypeIcon}
                  </View>
                </View>
                <Text className="font-[TajawalRegular] items-center text-gray700 pt-1 px-1 text-left ">
                  {ClubTypeTitle}
                </Text>
              </View>
              <Text className=" text-xsRegular font-[TajawalRegular] mt-0.5 text-gray700">
                |
              </Text>
              <View className="items-center justify-center pt-1">
                <Text className="font-[TajawalRegular] items-center justify-center text-gray700 px-1">
                  عدد الطلاب: {StudentRegistered}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View className="h-full justify-center py-1 px-1">
              <PrimaryButton />
            </View>
          </TouchableOpacity>
        </MotiView>
      </TouchableOpacity>
    </>
  );
};

export default ClubsCard;

const styles = StyleSheet.create({
  CardsBorder: { borderColor: "#EEEEEE", borderWidth: 1 },
  clubAvatar: {
    height: 60,
    width: 60,
    maxHeight: 60,
    minHeight: 60,
    backgroundColor: "black",
    minWidth: 60,
  },
  universityAvatar: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 20,
    width: 20,
    maxHeight: 20,
    minHeight: 20,
    minWidth: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
  },
});
