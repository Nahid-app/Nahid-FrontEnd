import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversitiesList from "./components/UniversitiesList";
import SearchBarComponent from "../../components/SearchBarComponent";
import { useContext } from "react";
import { UniContext } from "../../context/UniProvider";
import { AuthContext } from "../../context/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

export default function UniversitiesScreen({ navigation }) {
  const [data, setData] = useState([]);
  const { error, isLoading, universities, GETUniversities } =
    useContext(UniContext);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    getUserData();
  }, []);
  function getUserData() {
    GETUniversities();
  }

  // const handleSearch = (query) => {
  //   const newData = data.filter((item) => {
  //     const itemData = item.name;
  //     const queryData = query;
  //     return itemData.indexOf(queryData) > -1;
  //   });
  //   setFilteredData(newData);
  // };
  // useEffect(() => {
  //   setFilteredData(data);
  // }, [data]);

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="flex-1 bg-white pt-4 px-6"
    >
      <SearchBarComponent title={"كل الجامعات"} placeholder={"إبحث عن جامعة"} />
      <View className="flex-1 w-full content-center pt-6">
        <UniversitiesList data={universities} navigation={navigation} />
        {error && <Text>{error}</Text>}
        {isLoading && <ActivityIndicator size="small" color="#6949FF" />}
      </View>
    </SafeAreaView>
  );
}
