import { View, Text, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import slides from "../../components/Onboarding/slides";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import OnBoardingButtonWhite from "../../components/buttons/OnBoardingButtonWhite";
import SignUpScreen from "../signUpScreen/SignUpScreen";
import { MotiSafeAreaView, MotiView } from "moti";

export default function WalkthroughScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  function Increment({ navigation }) {
    index !== 2 ? setIndex(index + 1) : navigation.navigate("SignUpScreen");
  }

  return (
    <>
      <MotiSafeAreaView
        from={{
          translateY: -10,
        }}
        animate={{
          translateY: 0,
        }}
        className="flex-1 justify-center content-center items-center bg-white "
        
      >
        <MotiView
          from={{
            translateY: -10,
          }}
          animate={{
            translateY: 0,
          }}
          className="justify-center items-center "
        >
          <Swiper
            paginationStyle={{
              position: "absolute",
              bottom: 30,
            }}
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            loop={false}
            index={index}
            onMomentumScrollEnd={() => {
              "lastSlide";
            }}
            activeDotColor={"#6949FF"}
            activeDotStyle={{ width: 30 }}
            autoplay
          >
            {slides.map((i) => {
              return (
                <View
                  key={i.id}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View className="items-center justify-center">{i.image}</View>
                  <View className="justify-center items-center">
                    <Text className="py-10 flex-wrap font-[TajawalBold] text-h3 px-4 justify-center content-center text-center">
                      {i.title}
                    </Text>
                  </View>
                </View>
              );
            })}
          </Swiper>
        </MotiView>
      </MotiSafeAreaView>
      <MotiView
        className="pb-7 justify-center content-center items-center bg-white px-9"
        from={{
          translateY: -10,
        }}
        animate={{
          translateY: 0,
        }}
      >
        <PrimaryColorButton
          title={index === 2 ? "إبدء" : "التالي"}
          onPress={() => Increment({ navigation })}
        />
      </MotiView>
      <MotiView
        from={{
          translateY: -10,
        }}
        animate={{
          translateY: 0,
        }}
        className="pb-7 justify-center content-center items-center bg-white px-8"
      >
        <OnBoardingButtonWhite
          title={"سجل دخولك معنا"}
          onPress={() => navigation.navigate("loginScreen")}
        />
      </MotiView>
    </>
  );
}
