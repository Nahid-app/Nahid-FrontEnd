import { View, Text, FlatList } from "react-native";
import React from "react";
import ClubCard from "./components/ClubCard";
import clubs from "./clubs";

export default function AllClubsScreen() {
  //   rendered card style and customization here
  const Item = ({ item }) => (
    <View className="justify-center content-center ">
      <ClubCard
      universityName={item.universityName}
      clubName={item.clubName}
      universityAvatar={item.universityAvatar}
      clubAvatar={item.clubAvatar}
      />
    </View>
  );
  return (
    <View className="bg-white flex-1 w-full content-center items-center ">
      <View className="flex-1 w-full px-6 content-center pt-6">
        <FlatList
          data={clubs}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className="pt-6" />}
        />
      </View>
    </View>
  );
}
