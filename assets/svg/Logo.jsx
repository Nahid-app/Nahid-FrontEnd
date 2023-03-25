import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function Logo(props) {
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
        d="M21.05 23.815c-.102.11-.22.21-.352.297A12.126 12.126 0 012.06 16.158a12.137 12.137 0 018.373-13.757 12.125 12.125 0 0114.65 6.68c.873 1.968 1.2 4.12.97 6.231-.144 1.333-1.536 2.04-2.812 1.634-1.277-.407-1.937-1.788-1.97-3.127a7.282 7.282 0 00-4.257-6.444 7.275 7.275 0 00-9.235 2.839 7.282 7.282 0 006.65 11.053 7.274 7.274 0 002.72-.707l-7.312-7.315a4.85 4.85 0 016.861 0l9.435 9.438a4.851 4.851 0 01-5.084 1.132z"
        fill="url(#paint0_linear_158_7196)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_158_7196"
          x1={26.1329}
          y1={26.1329}
          x2={-2.74228}
          y2={17.7608}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6949FF" />
          <Stop offset={1} stopColor="#876DFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Logo;
