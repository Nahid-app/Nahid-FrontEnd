import { View, Text } from "react-native";
import React from "react";
import ArrowLeft from "../../../assets/svg/ArrowLeft";
import { Searchbar } from "react-native-paper";
import ArrowRight from "../../../assets/svg/arrowRightBlack";
import MagnifyingGlass from "../../../assets/svg/MagnifyingGlass";

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View className="px-6 w-full flex-row justify-between pb-5">
      <View className="items-center justify-end">
        <Text className="font-[TajawalBold] text-h4 justify-center">
          كل الجامعات
        </Text>
      </View>
      <View className="justify-center items-end">
        <MagnifyingGlass />
      </View>
    </View>
  );
};

export default SearchBarComponent;
