import { View, Text } from "react-native";
import React from "react";
import FourCellsGridTable from "../../../components/FourCellsGridTable";

const EventInformation = () => {
  return (
    <View>
      <FourCellsGridTable
        topRightTitle={"وقت الحضور"}
        topRightInfo={"4:00 PM"}
        topLeftTitle={"يوم الحضور"}
        topLeftInfo={"2nd of May"}
        bottomRightTitle={"اموقع"}
        bottomRightInfo={"MIS Room 38"}
        bottomLeftTitle={"القدرة الإستيعابية"}
        bottomLeftInfo={"42"}
      />
    </View>
  );
};

export default EventInformation;
