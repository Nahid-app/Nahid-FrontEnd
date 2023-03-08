import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Logo = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.05 22.816a1.947 1.947 0 0 1-.352.297A12.126 12.126 0 0 1 1.06 15.159 12.137 12.137 0 0 1 9.433 1.402a12.126 12.126 0 0 1 14.65 6.68c.873 1.968 1.2 4.119.97 6.23-.144 1.333-1.536 2.041-2.812 1.634-1.277-.406-1.937-1.787-1.97-3.126a7.282 7.282 0 0 0-4.257-6.444 7.275 7.275 0 0 0-9.235 2.838 7.282 7.282 0 0 0 6.65 11.053 7.276 7.276 0 0 0 2.72-.706l-7.312-7.315a4.85 4.85 0 0 1 6.861 0l9.435 9.437a4.851 4.851 0 0 1-5.084 1.133Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={25.133}
        y1={25.133}
        x2={-3.742}
        y2={16.761}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6949FF" />
        <Stop offset={1} stopColor="#876DFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Logo;
