import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Ticket(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#6949FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13.85 4.25v2.42M13.85 17.76v2.024M13.85 14.325V9.504" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.702 20C20.524 20 22 18.543 22 16.743v-2.592A2.159 2.159 0 0119.823 12c0-1.19.971-2.15 2.177-2.15l-.001-2.594c0-1.8-1.477-3.257-3.298-3.257H5.3C3.478 4 2 5.457 2 7.257L2 9.935c1.206 0 2.177.875 2.177 2.066 0 1.19-.971 2.15-2.177 2.15v2.592C2 18.543 3.476 20 5.298 20h13.404z"
        />
      </G>
    </Svg>
  );
}

export default Ticket;
