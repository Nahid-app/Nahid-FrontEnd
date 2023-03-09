import { View, ScrollView, Image, Text } from "react-native";
import React from "react";

const StudentClubs = () => {
  return (
    <View className="pb-3.5 pl-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <View className="h-32 w-44 bg-green mr-5 rounded-2xl relative items-center justify-center">
          {/* <View className="absolute bg-white w-4 h-4 top-2 z-0"></View>
          <View className="absolute bg-orange w-4 h-4 z-0"></View>
          <View></View>
          <View></View> */}

          <Image
            className="absolute h-32 w-44 bg-auto z-10 rounded-2xl"
            source={{
              uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <View className="absolute z-20 left-3 bottom-3">
            <View className="w-24">
              <Text className="font-[TajawalBold] text-white">
                نادي الحاسب الآلي
              </Text>
            </View>
          </View>
        </View>
        <View className="h-32 w-44 bg-green mr-5 rounded-2xl relative items-center justify-center">
          {/* <View className="absolute bg-white w-4 h-4 top-2 z-0"></View>
          <View className="absolute bg-orange w-4 h-4 z-0"></View>
          <View></View>
          <View></View> */}

          <Image
            className="absolute h-32 w-44 bg-auto z-10 rounded-2xl"
            source={{
              uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <View className="absolute z-20 left-3 bottom-3">
            <View className="w-24">
              <Text className="font-[TajawalBold] text-white">
                نادي الحاسب الآلي
              </Text>
            </View>
          </View>
        </View>
        <View className="h-32 w-44 bg-green mr-5 rounded-2xl relative items-center justify-center">
          {/* <View className="absolute bg-white w-4 h-4 top-2 z-0"></View>
          <View className="absolute bg-orange w-4 h-4 z-0"></View>
          <View></View>
          <View></View> */}

          <Image
            className="absolute h-32 w-44 bg-auto z-10 rounded-2xl"
            source={{
              uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <View className="absolute z-20 left-3 bottom-3">
            <View className="w-24">
              <Text className="font-[TajawalBold] text-white">
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
