import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowUp(props) {
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
        d="M19.53 16.03a.75.75 0 01-.976.073l-.084-.073L12 9.561l-6.47 6.47a.75.75 0 01-.976.072l-.084-.073a.75.75 0 01-.073-.976l.073-.084 7-7a.75.75 0 01.976-.073l.084.073 7 7a.75.75 0 010 1.06z"
        fill="#6949FF"
      />
    </Svg>
  );
}

export default ArrowUp;
