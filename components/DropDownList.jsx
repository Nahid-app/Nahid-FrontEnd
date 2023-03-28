import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const DropDownList = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(props.itemsList);

  return (
    <View>
      <Text className="font-[TajawalBold] text-lBold text-grey900">
        {props.title}
      </Text>
      <DropDownPicker
        placeholder={props.title}
        dropDownContainerStyle={{ borderColor: "#6949FF" }}
        activityIndicatorColor="#6949FF"
        className="border-0 p-0 m-0"
        textStyle={{
          fontFamily: "TajawalBold",
          fontSize: 20,
        }}
        // dropDownContainerStyle={{ borderRadius: 16 }}
        rtl={true}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        disableBorderRadius={true}
      />
      <View className="flex-row w-full h-0.5 bg-primary "></View>
    </View>
  );
};

export default DropDownList;
