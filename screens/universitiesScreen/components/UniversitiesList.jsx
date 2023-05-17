import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversitiesCard from "./UniversitiesCard";
import data from "./universities";

const RenderItem = ({ item, navigation }) => {
  // console.log("Here is the data:", item);

  return (
    <View className="justify-center content-center p-2">
      <UniversitiesCard
        universityName={item.universitiesName}
        universityAvatar={item.avatar}
        clubsNumber={item.clubsNumber}
        UniversityLocation={item.UniversityLocation}
        navigation={navigation}
      />
    </View>
  );
};

const UniversitiesList = ({ navigation }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RenderItem item={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="" />}
      showsVerticalScrollIndicator={false}
      refreshing={true}
    />
  );
};

export default UniversitiesList;
