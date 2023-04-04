import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TimesIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.645 14l5.017-5.005a1.171 1.171 0 10-1.657-1.657L14 12.355 8.995 7.338a1.171 1.171 0 00-1.657 1.657L12.355 14l-5.017 5.005a1.166 1.166 0 000 1.657 1.167 1.167 0 001.657 0L14 15.645l5.005 5.017a1.167 1.167 0 001.657 0 1.169 1.169 0 000-1.657L15.645 14z"
        fill="#212121"
      />
    </Svg>
  );
}

export default TimesIcon;
