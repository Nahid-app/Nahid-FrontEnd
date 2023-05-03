import { View, Text, Image } from "react-native";
import OnImageEditIcon from "../../../assets/svg/OnImageEditIcon";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import React, { useState, useEffect } from "react";
import { Button, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileImage = () => {
  const [image, setImage] = useState(
    "https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1684972800&v=beta&t=BYiIYD5Q2PHylqQlYniN3MfmxJlzQgETs9gHogaIRD4"
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="items-center pt-6 relative">
      <View className="rounded-full bg-primary w-32 h-32 z-0">
        {image && (
          <Image
            source={{
              uri: image,
            }}
            className="rounded-full"
            style={{ width: 128, height: 128 }}
          />
        )}
        <View className="w-6 h-6 bg-white z-10 absolute bottom-1 left-1 justify-center">
          <Pressable onPress={pickImage}>
            <OnImageEditIcon />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileImage;
