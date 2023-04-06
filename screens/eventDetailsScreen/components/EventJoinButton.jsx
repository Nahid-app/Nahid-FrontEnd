import { View, Text } from "react-native";
import React from "react";
import PrimaryColorButton from "../../../components/buttons/PrimaryColorButton";

const EventJoinButton = () => {
  return (
    <View className="bottom-5 absolute w-[100%] px-6 ">
      <PrimaryColorButton title={"إنضم للنشاط"} />
    </View>
  );
};

export default EventJoinButton;
