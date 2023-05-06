import { View, Text } from "react-native";
import React from "react";
import TextWithReadMore from "../../../components/TextWithReadMore";

const EventDescription = () => {
  return (
    <TextWithReadMore
      textTitle="وصف الفعالية"
      text="حياكم الله، سجلو في مسابقة التقط العلم مدة المسابقة 24 ساعة."
    />
  );
};

export default EventDescription;
