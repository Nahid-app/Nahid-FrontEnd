import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import ArrowRight from "../assets/svg/ArrowRightBlack";
import MagnifyingGlass from "../assets/svg/MagnifyingGlass";
import { MotiText, MotiView } from "moti";

const SearchBarComponent = ({ title, placeholder }) => {
  // Search bar appearance
  const [isShown, setIsShown] = React.useState(false);

  const handleClick = () => setIsShown(!isShown);
  // End of Search bar appearance

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
      <View className="w-full flex-row items-center justify-center">
        <Pressable onPress={handleClick}>
          <View>
            <ArrowRight />
          </View>
        </Pressable>
        <View className="w-full px-9">
          <Searchbar
            placeholder={placeholder}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: 20,
            }}
            iconColor="#BDBDBD"
            placeholderTextColor={"#BDBDBD"}
            inputStyle={{
              fontFamily: "TajawalRegular",
            }}
            elevation={0}
          />
        </View>
      </View>
    );
  };
  const Components = () => {
    return isShown ? (
      <MotiView
        from={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "timing",
        }}
        className="w-full"
      >
        <SearchBar />
      </MotiView>
    ) : (
      <MagnifyingGlass />
    );
  };

  return (
    <View className=" w-full flex-row justify-between items-center ">
      <MotiView
        from={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "timing",
        }}
        className="items-center justify-end"
      >
        {/* this line shows the header title if the searchbar is not Shown otherwise return null title*/}
        {isShown ? null : (
          <MotiText
            from={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "timing",
            }}
            className="font-[TajawalBold] text-h4 justify-center items-center pt-2 text-center"
            style={{ paddingTop: Platform.OS === "ios" ? 8 : null }}
          >
            {title}
            {/* title */}
          </MotiText>
        )}
      </MotiView>
      <TouchableOpacity onPress={handleClick} disabled={isShown}>
        <MotiView
          from={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "timing",
          }}
          className="justify-center items-end w-full"
        >
          <Components />
        </MotiView>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarComponent;
