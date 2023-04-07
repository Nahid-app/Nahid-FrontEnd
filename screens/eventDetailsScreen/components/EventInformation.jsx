import { View, Text } from "react-native";
import React from "react";
import FourCellsGridTable from "../../../components/FourCellsGridTable";

const EventInformation = () => {
  return (
    <View>
      <FourCellsGridTable
        topRightTitle={"الوقت"}
        topRightInfo={"4:00 PM"}
        topLeftTitle={"اليوم"}
        topLeftInfo={"2nd of May"}
        bottomRightTitle={"المكان"}
        bottomRightInfo={"MIS Room 38"}
        bottomLeftTitle={"نوع النشاط"}
        bottomLeftInfo={"ندوة"}
      />
    </View>
  );
};

export default EventInformation;
