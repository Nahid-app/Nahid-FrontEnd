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
  const { error, isLoading, universities, GETUniversities } =
  useContext(UniContext);
    // this function calls the function in Context to send a request
    //  to backend to get universities data
    function getUniversitiesData() {
      GETUniversities();
  }
  useEffect(() => {
    getUniversitiesData();
  }, []);

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
  // const [filteredData, setFilteredData] = useState(data);
      // const [data, setData] = useState([]);
