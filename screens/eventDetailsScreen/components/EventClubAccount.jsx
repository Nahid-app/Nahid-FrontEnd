import React from "react";
import EntityAccount from "../../../components/EntityAccount";

const EventClubAccount = ({ route, clubId }) => {
  const { clubName } = route.params;
  return (
    <EntityAccount
      imageSource={require("../../../assets/imgs/logos/jic.png")}
      name={clubName}
      accountName={"كلية الجبيل الصناعية"}
      buttonTitle={"تابع"}
      clubId={clubId}
    />
  );
};

export default EventClubAccount;
