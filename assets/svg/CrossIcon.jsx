import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CrossIcon(props) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.398 1.01v6.777M7.79 4.399H1.006"
        stroke="#ffffff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CrossIcon;
