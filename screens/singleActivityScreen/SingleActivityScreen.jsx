import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";

// this is the thumbnail variable that has the main thumbnail in the screen
const ThumbnailAndTitle = ({ title }) => {
  return (
    // image container
    <>
      <View className="h-56 overflow-hidden items-center content-center justify-center">
        <Image
          source={require("./Thumbnailimg.png")}
          className="w-80 h-56"
          resizeMode="contain"
        />
      </View>
      <View className="items-start text-right">
        <Text className="text-h4 py-5 font-[TajawalBold]">{title}</Text>
      </View>
    </>
  );
};

const data = [
  { id: "1", color: "red", content: "الموقع", emoji: "📍" },
  { id: "2", color: "blue", content: "تاريخ البداية", emoji: "📅" },
  { id: "3", color: "green", content: "تاريخ النهاية", emoji: "📅" },
  { id: "4", color: "yellow", content: "أخر يوم للتسجيل ", emoji: "🔔" },
];

const GridList = () => {
  const renderItem = ({ item }) => {
    return (
      <View className="items-start overflow-hidden justify-center w-28 flex-1">
        <View className="flex-col">
          <View className="  flex-row content-center items-center">
            <Text className="text-h6 font-[TajawalBold] justify-center pb-3 break-words ">
              {item.emoji}
            </Text>
            <Text
              className="text-h6 font-[TajawalMedium] justify-center content-center break-words pl-1"
              style={{ textAlignVertical: "center" }}
            >
              13/12/2000
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const ActivityInformation = () => {
    //! the error in this screen comes from this flatlist in review we should rewrite this section with a better section
    return (
      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled="false"
          contentContainerStyle={{ justifyContent: "center" }}
        />
      </ScrollView>
    );
  };
  return (
    <View className="h-20 py-2">
      <ActivityInformation />
    </View>
  );
};
// Organizer means club / college who organizes the event
const Organizer = () => {
  return (
    <View className=" flex-row justify-center content-center items-center b">
      <View className="pr-5">
        <Image
          source={require("./Ellipse.png")}
          resizeMode="cover"
          style={{
            height: 60,
            width: 60,
            maxHeight: 60,
            minHeight: 60,
            minWidth: 60,
          }}
        />
      </View>
      <View className="flex-col  items-start justify-between ">
        <Text className="text-h6 font-[TajawalBold] pb-1">نادي الحاسب</Text>
        <Text className="text-left font-[TajawalRegular]">
          كلية الجبيل الصناعية
        </Text>
      </View>
      <View
        className="ml-auto px-4 py-2 rounded-2xl bg-primary"
        style={{ borderWidth: 1, borderColor: "#6949FF" }}
      >
        <Text className="text-white ">تابع</Text>
      </View>
    </View>
  );
};

const SingleActivityScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const { clubName } = route.params;

  return (
    // main screen // background screen that holds everything in place.
    <View
      className="bg-white flex-1"
      style={{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <ScrollView
        scrollEnabled={true}
        className="bg-white flex-1 "
        contentContainerStyle={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* second screen that holds all elements in place and with padding  */}
        <View className="flex-1 justify-center px-6 pb-6">
          <View>
            <ThumbnailAndTitle title={title} />
          </View>
          <View
            className=""
            style={{
              borderBottomColor: "#EEEEEE",
              borderBottomWidth: 1,
              borderTopColor: "#EEEEEE",
              borderTopWidth: 1,
            }}
          >
            <GridList />
          </View>
          <View className="mt-5">
            <Organizer />
          </View>
          <View className="mt-5 pb-6">
            <Text className="font-[TajawalBold] text-left pb-3 text-h5">
              الوصف
            </Text>
            <Text className="font-[TajawalRegular] text-left leading-6 ">
              لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
              الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
              لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
              عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من
              نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون
              من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله
              الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات
              هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي
              مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر
              الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت
              أيضاً على نسخ من نص لوريم إيبسوم.
            </Text>
            <Text
              className="font-[TajawalRegular] text-left leading-6"
              numberOfLines={5}
            >
              لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
              الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
              لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
              عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من
              نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون
              من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله
              الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات
              هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي
              مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر
              الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت
              أيضاً على نسخ من نص لوريم إيبسوم.
            </Text>
            <Text
              className="font-[TajawalRegular] text-left leading-6 pb-6"
              numberOfLines={5}
            >
              لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
              الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
              لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
              عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من
              نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون
              من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله
              الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات
              هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي
              مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر
              الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت
              أيضاً على نسخ من نص لوريم إيبسوم.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="z-10 py-4 absolute bottom-0 ">
        <PrimaryColorButton title={"سجل الان"} className="" />
      </View>
    </View>
  );
};

export default SingleActivityScreen;
