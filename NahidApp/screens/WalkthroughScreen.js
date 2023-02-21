import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import slides from "../components/Onboarding/slides";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryColorButton from "../components/buttons/PrimaryColorButton";
import OnBoardingButtonWhite from "../components/buttons/OnBoardingButtonWhite";
import SignUpScreen from "./signUpScreen/SignUpScreen";
import { StatusBar } from "expo-status-bar";
import { DARK_MODE } from "nativewind/dist/utils/selector";

export default function WalkthroughScreen({ navigation }) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <View
        className="flex-1 justify-center content-center items-center bg-white "
        style={{ height: "90%" }}
      >
        <Swiper
          paginationStyle={{
            position: "absolute",
            bottom: 100,
          }}
          loop={false}
          index={index}
          onMomentumScrollEnd={() => {
            index >= 0 ? setIndex(index + 1) : console.log("lastSlide");
          }}
          activeDotColor={"#6949FF"}
          activeDotStyle={{ width: 30 }}
        >
          {slides.map((i) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={i.image} />
                  <Text className="pt-20 flex-wrap font-[TajawalBold] text-h3 px-4 justify-center content-center text-center">
                    {i.title}
                  </Text>
                </View>
              </SafeAreaView>
            );
          })}
        </Swiper>
      </View>
      <View className="pb-7 justify-center content-center items-center bg-white">
        <PrimaryColorButton
          title={index === 2 ? "إبدء" : "التالي"}
          onPress={() =>
            index !== 2
              ? setIndex(index + 1)
              : navigation.navigate("signUpScreen")
          }
        />
      </View>
      <View className="pb-7 justify-center content-center items-center bg-white">
        <OnBoardingButtonWhite
          title={"سجل دخولك معنا"}
          onPress={() => navigation.navigate("loginScreen")}
        />
      </View>
    </>
  );
}
