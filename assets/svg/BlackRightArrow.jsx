import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BlackRightArrow = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
  >
    <Path
      fill="#212121"
      d="M.97 15.53a.75.75 0 0 1-.073-.976l.073-.084L7.439 8 .969 1.53A.75.75 0 0 1 .898.554L.97.47a.75.75 0 0 1 .976-.073L2.03.47l7 7a.75.75 0 0 1 .073.976l-.073.084-7 7a.75.75 0 0 1-1.06 0Z"
    />
  </Svg>
);
export default BlackRightArrow;
