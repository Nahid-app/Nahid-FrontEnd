import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BlackRightArrow(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BlackRightArrow;
