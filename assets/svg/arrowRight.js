import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRight = (props) => (
  <Svg
    width={17}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 7.726a.75.75 0 0 1 .648-.744l.102-.006h15a.75.75 0 0 1 .102 1.493l-.102.007h-15a.75.75 0 0 1-.75-.75Z"
      fill="#6949FF"
    />
    <Path
      d="M9.171 2.233a.75.75 0 0 1 .974-1.136l.084.073 6.05 6.024a.75.75 0 0 1 .073.978l-.073.085-6.05 6.025a.75.75 0 0 1-1.13-.98l.072-.083 5.516-5.494-5.516-5.492Z"
      fill="#6949FF"
    />
  </Svg>
);

export default ArrowRight;
