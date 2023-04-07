import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import PrimaryColorButton from "../../../components/buttons/PrimaryColorButton";

const EventJoinButton = () => {
  return (
    <SafeAreaView className="bottom-0 fixed w-[100%]  py-2 bg-white ">
      <PrimaryColorButton title={"إنضم للنشاط"} />
    </SafeAreaView>
  );
};

export default EventJoinButton;
