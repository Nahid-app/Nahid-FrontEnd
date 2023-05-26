import React from "react";
import EntityAccount from "../../../components/EntityAccount";

const EventClubAccount = () => {
  return (
    <EntityAccount
      imageSource={require("../../../assets/imgs/logos/jic.png")}
      name={"نادي الحاسب الآلي"}
      accountName={"كلية الجبيل الصناعية"}
      buttonTitle={"إشتراك"}
    />
  );
};

export default EventClubAccount;
