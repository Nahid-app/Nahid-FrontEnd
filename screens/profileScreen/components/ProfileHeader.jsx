import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Logo from "../../../assets/svg/Logo";
import Settings from "../../../assets/svg/Settings";
import LogOut from "../../../assets/svg/LogOut";
import { AuthContext } from "../../../context/AuthProvider";

const ProfileHeader = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View className="flex-row justify-between">
      <View className="flex-row items-center">
        <View className="py-1.5">{/* <Logo /> */}</View>
        <Text className="font-[TajawalBold] text-h4 px-4">حسابي</Text>
      </View>
      <TouchableOpacity onPress={() => logout()}>
        <LogOut />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
