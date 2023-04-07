import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BlackArrowLeft = (props) => (
  <Svg
    width={17}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 6.774a.75.75 0 0 1 .648-.743l.102-.007h15a.75.75 0 0 1 .102 1.493l-.102.007h-15a.75.75 0 0 1-.75-.75Z"
      fill="#000000"
    />
    <Path
      d="M7.329 12.268a.75.75 0 0 1-.974 1.135l-.084-.072L.22 7.306a.75.75 0 0 1-.073-.978l.073-.084L6.27.219a.75.75 0 0 1 1.13.978l-.072.084-5.516 5.494 5.516 5.492Z"
      fill="#000000"
    />
  </Svg>
);

export default BlackArrowLeft;
