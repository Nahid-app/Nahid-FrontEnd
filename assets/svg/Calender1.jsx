import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Calender = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.093 8.404h17.823M14.442 12.31h.01M10.005 12.31h.009M5.558 12.31h.01M14.442 16.196h.01M10.005 16.196h.009M5.558 16.196h.01M14.044 1v3.29M5.965 1v3.29"
      stroke="#6949FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M14.238 2.58H5.771C2.834 2.58 1 4.214 1 7.221v9.05C1 19.326 2.834 21 5.771 21h8.458C17.175 21 19 19.355 19 16.348V7.222c.01-3.007-1.816-4.643-4.762-4.643Z"
      stroke="#6949FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Calender;
