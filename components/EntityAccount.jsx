import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { useContext } from "react";
import { MembershipContext } from "../context/MembershipProvider";
import { ActivityIndicator } from "react-native-paper";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { UniContext } from "../context/UniProvider";
import { useState } from "react";
import axios from "axios";

const EntityAccount = (props, { route, navigation }) => {
  const { user } = useContext(AuthContext);
  const clubID = props.clubId;
  const [subscribed, setSubscribed] = useState("");
  function subscribe(clubID, navigation) {
    axios.post(
      "http://47.254.73.147/api/memberships/",
      {
        club_id: clubID,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + user.userToken,
        },
      }
    );
    setSubscribed("تم المتابعة");
  }
  return (
    <>
      <View className="flex-row justify-between items-center my-5">
        <View className=" flex-row ">
          <Image
            className="rounded-full"
            source={props.imageSource}
            style={{ width: 64, height: 64 }}
          />
          <View className="pl-5 justify-center">
            <Text className="font-[TajawalBold] text-gray900 text-h6 p-px">
              {props.name}
            </Text>
            <Text className="font-[TajawalMedium] text-gray700 text-left p-px">
              {props.accountName}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => subscribe(clubID)}>
          <View className="bg-primary w-16 h-9 rounded-full justify-center ">
            <Text className="font-[TajawalMedium] text-mSemiBold text-white text-center p-2">
              {props.buttonTitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {subscribed && <Text className="text-center">{subscribed}</Text>}
    </>
  );
};

export default EntityAccount;
