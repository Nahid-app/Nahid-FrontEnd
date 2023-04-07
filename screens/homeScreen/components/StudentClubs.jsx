import { View, ScrollView, Image, Text } from "react-native";
import React from "react";

const StudentClubs = () => {
  return (
    <View className="pb-4 pl-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <View className="h-32 w-44 bg-green mr-5 rounded-2xl relative items-center justify-center">
          <Image
            className="absolute h-32 w-44 bg-auto z-10 rounded-2xl"
            source={{
              uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <View className="absolute z-20 left-3 bottom-3">
            <View className="w-26">
              <Text className="font-[TajawalBold] text-white text-left">
                نادي الحاسب الآلي
              </Text>
            </View>
          </View>
        </View>
        <View className="h-32 w-44 bg-green mr-5 rounded-2xl relative items-center justify-center">
          <Image
            className="absolute h-32 w-44 bg-auto z-10 rounded-2xl"
            source={{
              uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <View className="absolute z-20 left-3 bottom-3">
            <View className="w-26">
              <Text className="font-[TajawalBold] text-white text-left">
                نادي الحاسب الآلي
              </Text>
            </View>
          </View>
        </View>
        <View className="h-32 w-44 bg-green mr-5 rounded-2xl relative items-center justify-center">
          <Image
            className="absolute h-32 w-44 bg-auto z-10 rounded-2xl"
            source={{
              uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <View className="absolute z-20 left-3 bottom-3">
            <View className="w-26">
              <Text className="font-[TajawalBold] text-white text-left">
                نادي الحاسب الآلي
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default StudentClubs;
