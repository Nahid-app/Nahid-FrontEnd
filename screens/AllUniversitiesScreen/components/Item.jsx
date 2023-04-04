import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversityCard from "./UniversityCard";

const Item = ({ item }) => (
  <View className="justify-center content-center">
    <UniversityCard
      universityName={item.universitiesName}
      universityAvatar={item.avatar}
      clubsNumber={item.clubsNumber}
      registeredStudentNumber={item.registeredStudentNumber}
    />
  </View>
);

export default Item;
