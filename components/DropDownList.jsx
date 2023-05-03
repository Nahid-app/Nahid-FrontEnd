import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import ArrowDown from "../assets/svg/ArrowDown";
import ArrowUp from "../assets/svg/ArrowUp";

const DropDownList = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.itemsList);

  return (
    <View>
      <Text className="font-[TajawalBold] text-h5 text-grey900 text-left overflow-hidden">
        {props.title}
      </Text>
      <DropDownPicker
        rtl={false}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={props.searchTitle}
        searchable={props.searchability}
        className="border-0 p-0 m-0"
        listMode="SCROLLVIEW"
        dropDownContainerStyle={{
          borderColor: "#E0E0E0",
          borderBottomEndRadius: 8,
          borderBottomStartRadius: 8,
        }}
        itemSeparatorStyle={{
          backgroundColor: "#6949FF",
          marginHorizontal: 12,
        }}
        selectedItemContainerStyle={{
          backgroundColor: "rgba(105, 73, 255, 0.08)",
          marginHorizontal: 11,
          borderTopEndRadius: 6,
          borderTopStartRadius: 6,
          borderBottomEndRadius: 6,
          borderBottomStartRadius: 6,
        }}
        textStyle={{
          fontFamily: "TajawalMedium",
          fontSize: 18,
          textAlign: "left",
        }}
        itemSeparator={true}
        tickIconStyle={{
          borderRadius: 6,
        }}
        searchTextInputStyle={{ borderWidth: 0 }}
        searchContainerStyle={{
          borderBottomWidth: 2,
          padding: 0,
          marginTop: 8,
          marginHorizontal: 12,
          borderBottomColor: "#6949FF",
        }}
        dropDownDirection="TOP"
        ArrowDownIconComponent={({}) => <ArrowDown />}
        ArrowUpIconComponent={({}) => <ArrowUp />}
        customItemContainerStyle
        language="AR"
        searchPlaceholder={props.searchTitle}
        disableBorderRadius={true}
      />
      <View className="flex-row w-full h-0.5 bg-primary "></View>
    </View>
  );
};

export default DropDownList;
