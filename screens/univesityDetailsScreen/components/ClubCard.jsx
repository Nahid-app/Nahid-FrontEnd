import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MotiView } from "moti";
import Group from "../../../assets/svg/Group";
import PrimaryButton from "../../../components/PrimaryButton";
import { useContext } from "react";
import { MembershipContext } from "../../../context/MembershipProvider";
import { ActivityIndicator } from "react-native-paper";

const ClubCard = ({ item, navigation, index, route }) => {
  switch (item.category) {
    case 1:
      item.category = "أكاديمي";
      break;
    case 2:
      item.category = "رياضي";
      break;
    case 3:
      item.category = "ثقافي";
      break;
    case 4:
      item.category = "تقني";
      break;
    case 5:
      item.category = "غير ذلك";
      break;
  }
  const { universityLogo } = route.params;

  return (
    <View className="pt-5">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailsRoute", {
            screen: "ClubDetailsScreen",
            params: {
              clubName: item.name,
              clubId: item.id,
            },
          })
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
              source={{ uri: universityLogo }}
              resizeMode="contain"
              style={styles.clubAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
            <Image
              source={{ uri: universityLogo }}
              resizeMode="contain"
              style={styles.universityAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
          </View>
          <View className="items-start justify-center flex-grow flex-shrink ">
            <Text className="text-h6 font-[TajawalBold] py-1 items-start  pb-1.5 text-left">
              {item.name}
            </Text>
            {/* uni avatar */}
            <View className="flex-row items-center w-full flex-wrap">
              {/* uni name */}
              <View className="items-center justify-center flex-row text-center">
                <View className="justify-center align-middle items-center">
                  <View className="items-center justify-center pr-1">
                    <Group />
                  </View>
                </View>
              </View>
              <Text className="font-[TajawalRegular] text-gray700 pt-1 ">
                نادي : {item.category}
              </Text>
              {/*<Text className=" text-lMedium text-left font-[TajawalRegular] px-1.5 text-gray700 ">
                {"\u007C"}
              </Text>
              <View className="items-center justify-center pt-1">
                <Text className="font-[TajawalRegular] items-center justify-center text-gray700">
                  {index}
                </Text>
              </View>  */}
            </View>
          </View>
          <TouchableOpacity>
            <View className="h-full justify-center py-1 px-1">
              <PrimaryButton />
            </View>
          </TouchableOpacity>
          {/* {error && <Text>{error}</Text>}
          {subscribed && <Text>{subscribed}</Text>}
          {isLoading && <ActivityIndicator size="small" color="#6949FF" />} */}
        </MotiView>
      </TouchableOpacity>
    </View>
  );
};

export default ClubCard;

const styles = StyleSheet.create({
  CardsBorder: { borderColor: "#EEEEEE", borderWidth: 1 },
  clubAvatar: {
    height: 60,
    width: 60,
    maxHeight: 60,
    minHeight: 60,
    minWidth: 60,
  },
  universityAvatar: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 30,
    width: 30,
    maxHeight: 30,
    minHeight: 30,
    minWidth: 30,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "white",
  },
});
