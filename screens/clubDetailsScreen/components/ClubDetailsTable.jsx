import { View, Text } from "react-native";
import React from "react";
import FourCellsGridTable from "../../../components/FourCellsGridTable";

const ClubDetailsTable = () => {
  return (
    <View>
      <FourCellsGridTable
        topRightTitle={"عدد الفعاليات"}
        topRightInfo={"16"}
        topLeftTitle={"عدد الطلاب"}
        topLeftInfo={"134"}
        bottomRightTitle={"المكان"}
        bottomRightInfo={"MIS Room 38"}
        bottomLeftTitle={"النشاط"}
        bottomLeftInfo={"فني"}
      />
    </View>
  );
};

export default ClubDetailsTable;
