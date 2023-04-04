import { View, Text } from "react-native";
import React from "react";
import ArrowLeft from "../../../assets/svg/ArrowLeft";
import { Searchbar } from "react-native-paper";
import ArrowRight from "../../../assets/svg/arrowRightBlack";

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View className="px-6 w-full flex-row items-center">
      <ArrowRight />
      <View className="w-full px-6">
        <Searchbar
          placeholder=" إبحث عن جامعة"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 16,
          }}
          iconColor="#BDBDBD"
          placeholderTextColor={"#BDBDBD"}
          inputStyle={{
            fontFamily: "TajawalRegular",
          }}
          elevation={0}
        />
      </View>
    </View>
  );
};

export default SearchBarComponent;
