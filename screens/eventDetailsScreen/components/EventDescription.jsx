import { View, Text } from "react-native";
import React from "react";
import TextWithReadMore from "../../../components/TextWithReadMore";

const EventDescription = () => {
  return (
    <TextWithReadMore
      textTitle="وصف الفعالية"
      text="حياكم الله، مسابقة التقط العلم لمدة المسابقة 24 ساعة احد الأقصى للفريق الواحد هو 4 أشخاص. يمنع منعًا باتَا المشاركة بشكل فردي، المشاركة مسموحة لجميع الراغبين."
    />
  );
};

export default EventDescription;
