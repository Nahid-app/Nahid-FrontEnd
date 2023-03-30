import { View, Text, Image } from "react-native";
import React from "react";
import OnImageEditIcon from "../../../assets/svg/OnImageEditIcon";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const ProfileImage = () => {
  return (
    <View className="items-center pt-6 relative">
      <View className="rounded-full bg-primary w-32 h-32 z-0">
        <Image
          className="rounded-full"
          source={{
            uri: "https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1684972800&v=beta&t=BYiIYD5Q2PHylqQlYniN3MfmxJlzQgETs9gHogaIRD4",
          }}
          style={{ width: 128, height: 128 }}
        />
        <Pressable onPress={() => {}}>
          <View className="w-6 h-6 bg-white z-10 absolute bottom-1 left-1 justify-center">
            <OnImageEditIcon />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileImage;
