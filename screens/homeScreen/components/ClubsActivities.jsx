import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const ClubsActivities = ({ navigation }) => {
  return (
    <View className="pb-4 pl-6">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsRoute", {
              screen: "EventDetailsScreen",
            })
          }
        >
          <View className="h-36 w-52 bg-green mr-5 rounded-t-2xl relative items-center justify-center">
            <Image
              className="absolute h-36 w-52 bg-auto z-10 rounded-t-2xl"
              source={{
                uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
            <View className="absolute z-20 right-3 bottom-3">
              <View className="h-7 w-12 bg-primary rounded-md justify-center items-center">
                <Text className="font-[TajawalBold] text-xsSemiBold text-white">
                  16-02-23
                </Text>
              </View>
            </View>
          </View>
          <View className="h-28 w-52 border-x border-gray200 border-b-4 rounded-b-2xl p-3 justify-between items-start">
            <Text className="font-[TajawalBold] text-h6 ml-4 text-gray900">
              مسابقة إلتقط العلم
            </Text>
            <View>
              <View className="h-8 w-8 ml-3  flex-row items-center justify-start w-[80%]">
                <Image
                  className="h-8 w-8 bg-cover"
                  source={{
                    uri: "https://destinationlisting.com/wp-content/uploads/2015/10/jubail-in.png",
                  }}
                />
                <Text className="font-[TajawalLight] text-xsSemiBold text-gray800 ">
                  كلية الجبيل الصناعية
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsRoute", {
              screen: "EventDetailsScreen",
            })
          }
        >
          <View className="h-36 w-52 bg-green mr-5 rounded-t-2xl relative items-center justify-center">
            <Image
              className="absolute h-36 w-52 bg-auto z-10 rounded-t-2xl"
              source={{
                uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
            <View className="absolute z-20 right-3 bottom-3">
              <View className="h-7 w-12 bg-primary rounded-md justify-center items-center">
                <Text className="font-[TajawalBold] text-xsSemiBold text-white">
                  16-02-23
                </Text>
              </View>
            </View>
          </View>
          <View className="h-28 w-52 border-x border-gray200 border-b-4 rounded-b-2xl p-3 justify-between items-start">
            <Text className="font-[TajawalBold] text-h6 ml-4 text-gray900">
              مسابقة إلتقط العلم
            </Text>
            <View>
              <View className="h-8 w-8 ml-3  flex-row items-center justify-start w-[80%]">
                <Image
                  className="h-8 w-8 bg-cover"
                  source={{
                    uri: "https://destinationlisting.com/wp-content/uploads/2015/10/jubail-in.png",
                  }}
                />
                <Text className="font-[TajawalLight] text-xsSemiBold text-gray800 ">
                  كلية الجبيل الصناعية
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsRoute", {
              screen: "EventDetailsScreen",
            })
          }
        >
          <View className="h-36 w-52 bg-green mr-5 rounded-t-2xl relative items-center justify-center">
            <Image
              className="absolute h-36 w-52 bg-auto z-10 rounded-t-2xl"
              source={{
                uri: "https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
            />
            <View className="absolute z-20 right-3 bottom-3">
              <View className="h-7 w-12 bg-primary rounded-md justify-center items-center">
                <Text className="font-[TajawalBold] text-xsSemiBold text-white">
                  16-02-23
                </Text>
              </View>
            </View>
          </View>
          <View className="h-28 w-52 border-x border-gray200 border-b-4 rounded-b-2xl p-3 justify-between items-start">
            <Text className="font-[TajawalBold] text-h6 ml-4 text-gray900">
              مسابقة إلتقط العلم
            </Text>
            <View>
              <View className="h-8 w-8 ml-3  flex-row items-center justify-start w-[80%]">
                <Image
                  className="h-8 w-8 bg-cover"
                  source={{
                    uri: "https://destinationlisting.com/wp-content/uploads/2015/10/jubail-in.png",
                  }}
                />
                <Text className="font-[TajawalLight] text-xsSemiBold text-gray800 ">
                  كلية الجبيل الصناعية
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ClubsActivities;
