import * as React from "react"
import Svg, { G, Mask, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const MagnifyingGlass = (props) => (
  <Svg
    width={28}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Mask
        id="b"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={26}
        height={26}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.333.333h22.723v22.724H2.333V.332Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.695 2.083c-5.3 0-9.612 4.311-9.612 9.611 0 5.3 4.312 9.612 9.612 9.612s9.611-4.312 9.611-9.612-4.312-9.61-9.61-9.61m0 20.972c-6.266 0-11.363-5.097-11.363-11.362S7.43.334 13.695.334s11.361 5.095 11.361 11.36-5.096 11.362-11.36 11.362"
          fill="#212121"
        />
      </G>
      <Mask
        id="c"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={20}
        y={18}
        width={26}
        height={24}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.113 18.658h5.862v5.85h-5.862v-5.85Z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.1 24.509a.875.875 0 0 1-.618-.256l-4.112-4.1a.875.875 0 0 1 1.237-1.24l4.111 4.101a.874.874 0 0 1-.618 1.495"
          fill="#212121"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
)

export default MagnifyingGlass
