import * as React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const ModalCheck = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={186}
    height={180}
    fill="none"
  >
    <Circle cx={95.5} cy={90.5} r={70.5} fill="url(#a)" />
    <Circle cx={178.467} cy={27.5} r={7.5} fill="#A592FF" />
    <Circle cx={20.033} cy={10} r={10} fill="#A592FF" />
    <Circle cx={10.033} cy={133} r={5} fill="#A592FF" />
    <Circle cx={165.533} cy={160.5} r={2.5} fill="#A592FF" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M84.855 65.916h21.314c8.333 0 13.914 5.851 13.914 14.554v20.087c0 8.675-5.581 14.526-13.914 14.526H84.855c-8.334 0-13.939-5.851-13.939-14.526V80.47c0-8.703 5.605-14.553 13.939-14.553Zm9.243 31.934 11.677-11.677c.836-.836.836-2.188 0-3.048a2.166 2.166 0 0 0-3.048 0L92.574 93.278l-4.302-4.302a2.166 2.166 0 0 0-3.049 0c-.835.835-.835 2.188 0 3.048l5.851 5.826c.418.418.959.615 1.5.615.565 0 1.106-.197 1.524-.615Z"
      clipRule="evenodd"
    />
    <Circle cx={106.533} cy={4.5} r={2.5} fill="#A592FF" />
    <Circle cx={62.533} cy={176.5} r={3.5} fill="#A592FF" />
    <Circle cx={122.033} cy={171} r={1} fill="#A592FF" />
    <Circle cx={170.533} cy={110.5} r={2.5} fill="#A592FF" />
    <Circle cx={1.033} cy={75} r={1} fill="#A592FF" />
    <Defs>
      <LinearGradient
        id="a"
        x1={166}
        x2={-1.777}
        y1={161}
        y2={112.355}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6949FF" />
        <Stop offset={1} stopColor="#876DFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ModalCheck;
