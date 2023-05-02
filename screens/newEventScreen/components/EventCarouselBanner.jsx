import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import EventData from "./EventImages";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button } from "react-native-paper";

const EventCarouselBanner = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <View className=" mt-4 h-60 rounded-2xl overflow-hidden">
        {EventData.map((index) => (
          <View className="" key={index.id}>
            <Image
              source={{
                uri: image || index.image,
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        ))}
      </View>
      <Pressable onPress={pickImage} className="w-1/2 mx-auto mt-2">
        <Button
          className="text-center font-[TajawalMedium] text-white"
          buttonColor="#6949FF"
          textColor="#fff"
        >
          أضف صورة
        </Button>
      </Pressable>
    </>
  );
};

export default EventCarouselBanner;
