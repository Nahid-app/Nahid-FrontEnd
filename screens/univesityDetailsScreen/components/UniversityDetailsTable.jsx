import { View, Text } from "react-native";
import React from "react";
import FourCellsGridTable from "../../../components/FourCellsGridTable";

const UniversityDetailsTable = ({ route }) => {
  const { universityName, location, clubs_count, students_count } =
    route.params;

  return (
    <View className="pt-5 flex-1 bg-white">
      <FourCellsGridTable
        topRightTitle={"عدد الأندية"}
        topRightInfo={clubs_count}
        topLeftTitle={"عدد الطلاب"}
        topLeftInfo={students_count}
        bottomRightTitle={"عدد الفعاليات"}
        bottomRightInfo={"187"}
        bottomLeftTitle={"الموقع"}
        bottomLeftInfo={location}
      />
    </View>
  );
};

export default UniversityDetailsTable;
