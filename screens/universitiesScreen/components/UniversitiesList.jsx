import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversitiesCard from "./UniversitiesCard";

const RenderItem = ({ item, navigation }) => {
  // console.log("Here is the data:", item);

  return (
    <View className="justify-center content-center p-2">
      <UniversitiesCard
        universityName={item.name}
        universityLogo={item.logo_url}
        clubs_count={item.clubs_count}
        universityLocation={item.location}
        navigation={navigation}
        students_count={item.students_count}
        universityID={item.id}
        universityDescription={item.description}
      />
    </View>
  );
};

const UniversitiesList = ({ navigation, data }) => {
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
