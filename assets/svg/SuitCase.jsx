import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";

function SuitCase(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.995 17.427a.75.75 0 01-.75-.75V14.14a.75.75 0 011.5 0v2.537a.75.75 0 01-.75.75"
        fill="#212121"
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={22}
        height={20}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4.58h19.99v10.311H2V4.581z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 11.393c2.376 1.291 5.372 1.998 8.49 1.998 3.124 0 6.123-.707 8.5-1.998V8.391a2.307 2.307 0 00-2.3-2.31H5.81a2.308 2.308 0 00-2.31 2.3v3.012zm8.49 3.498c-3.545 0-6.962-.858-9.619-2.414a.748.748 0 01-.37-.647V8.381a3.81 3.81 0 013.81-3.8h12.38c2.095 0 3.8 1.708 3.8 3.81v3.44a.75.75 0 01-.372.646c-2.657 1.556-6.077 2.414-9.629 2.414z"
          fill="#212121"
        />
      </G>
      <Mask
        id="b"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={12}
        height={12}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.745 2h8.5v4.076h-8.5V2z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.495 6.076a.75.75 0 01-.75-.75V4.96c0-.805-.655-1.46-1.46-1.46h-2.58c-.805 0-1.46.655-1.46 1.46v.366a.75.75 0 01-1.5 0V4.96A2.964 2.964 0 0110.705 2h2.58a2.964 2.964 0 012.96 2.96v.366a.75.75 0 01-.75.75"
          fill="#212121"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.795 21.74h-11.6a4.008 4.008 0 01-3.979-3.69l-.19-2.51a.751.751 0 01.692-.805c.415-.015.773.278.805.692l.19 2.508a2.503 2.503 0 002.482 2.305h11.6a2.502 2.502 0 002.483-2.305l.19-2.508c.032-.414.4-.708.805-.692a.75.75 0 01.691.805l-.19 2.51a4.008 4.008 0 01-3.979 3.69"
        fill="#212121"
      />
    </Svg>
  );
}

export default SuitCase;
