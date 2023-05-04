import { View, Text } from "react-native";
import React from "react";
import FourCellsGridTable from "../../../components/FourCellsGridTable";

const UniversityDetailsTable = () => {
  return (
    <View className="pt-5 flex-1 bg-white">
      <FourCellsGridTable
        topRightTitle={"عدد الأندية"}
        topRightInfo={"12"}
        topLeftTitle={"عدد الطلاب"}
        topLeftInfo={"4568"}
        bottomRightTitle={"عدد الفعاليات"}
        bottomRightInfo={"187"}
        bottomLeftTitle={"الموقع"}
        bottomLeftInfo={"الجبيل"}
      />
    </View>
  );
};

export default UniversityDetailsTable;
