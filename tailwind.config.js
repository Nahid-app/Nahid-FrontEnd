// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#6949FF",
      secondary: "#FFC107",
      success: "#12D18E",
      info: "#6949FF",
      warning: "#FACC15",
      error: "#F75555",
      disabled: "#D8D8D8",
      disButton: "#543acc",
      gray900: "#212121",
      gray800: "#424242",
      gray700: "#616161",
      gray600: "#757575",
      gray500: "#9E9E9E",
      gray400: "#BDBDBD",
      gray300: "#E0E0E0",
      gray200: "#EEEEEE",
      gray100: "#F5F5F5",
      gray50: "#FAFAFA",
      gradientGreen: "#12D18E ",
      gradientYellow: "#FACC15 ",
      gradientBlue: "#246BFD ",
      gradientPurple: "#6949FF ",
      gradientTeal: "#019B83 ",
      gradientRed: "#FF5A5F",
      gradientOrange: "#FB9400",
      dark1: "#181A20",
      dark2: "#1F222A",
      dark3: "#262A35",
      dark4: "#35383F",
      white: "#FFFFFF",
      black: "#000000",
      red: "#F44336",
      pink: "#E91E63",
      purple: "#9C27B0",
      deepPurple: "#673AB7",
      indigo: "#3F51B5",
      blue: "#2196F3",
      lightBlue: "#03A9F4",
      cyan: "#00BCD4",
      teal: "#009688",
      green: "#4CAF50",
      lightGreen: "#8BC34A",
      lime: "#CDDC39",
      yellow: "#FFEB3B",
      amber: "#FFC107",
      orange: "#FF9800",
      deepOrange: "#FF5722",
      brown: "#795548",
      blueGray: "#607D8B",
      "bg-purple": "#F9F8FF",
      "bg-yellow": "#FFFCEB",
      "bg-green": "#F1FDF5",
      "bg-blue": "#F6F9FF",
      "bg-teal": "#F2FFFD",
      "bg-red": "#FFF7F8",
      "bg-orange": "#FFF8ED",
      "transparent-purple": "rgba(105, 73, 255, 0.08)",
      "transparent-yellow": "rgba(255, 211, 0, 0.08)",
      "transparent-green": "rgba(27, 172, 75, 0.08)",
      "transparent-blue": "rgba(36, 107, 253, 0.08)",
      "transparent-teal": "rgba(1, 155, 131, 0.08)",
      "transparent-red": "rgba(255, 90, 95, 0.08)",
      "transparent-orange": "rgba(255, 152, 0, 0.08)",
      "transparent-cyan": "rgba(0, 188, 212, 0.08)",
    },
    // font size
    // font title sizes
    fontFamily: {
      Tajawal: ["./assets/fonts/Tajawal-Black.ttf"],
      TajawalBold: "./assets/fonts/Tajawal-Bold.ttf",
      TajawalExtraBold: "./assets/fonts/Tajawal-ExtraBold.ttf",
      TajawalLight: "./assets/fonts/Tajawal-Light.ttf",
      TajawalMedium: "./assets/fonts/Tajawal-Medium.ttf",
      TajawalRegular: "./assets/fonts/Tajawal-Regular.ttf",
    },
    fontSize: {
      h1: [
        "48px",
        {
          fontWeight: "700",
        },
      ],
      h2: [
        "40px",
        {
          fontWeight: "700",
        },
      ],
      h3: [
        "32px",
        {
          fontWeight: "700",
        },
      ],
      h4: [
        "24px",
        {
          fontWeight: "700",
        },
      ],
      h5: [
        "20px",
        {
          fontWeight: "700",
        },
      ],
      h6: [
        "18px",
        {
          fontWeight: "700",
        },
      ],

      // font weights
      // font body sizes
      // xlarge
      xlBold: [
        "18px",
        {
          fontWeight: "700",
        },
      ],
      xlSemiBold: [
        "18px",
        {
          fontWeight: "600",
        },
      ],
      xlLarge: [
        "18px",
        {
          fontWeight: "large",
        },
      ],
      xlRegular: [
        "18px",
        {
          fontWeight: "regular",
        },
      ],

      // large
      lBold: [
        "16px",
        {
          fontWeight: "700",
        },
      ],
      lSemiBold: [
        "16px",
        {
          fontWeight: "600",
        },
      ],
      lLarge: [
        "16px",
        {
          fontWeight: "large",
        },
      ],
      lRegular: [
        "16px",
        {
          fontWeight: "regular",
        },
      ],

      // medium
      mBold: [
        "14px",
        {
          fontWeight: "700",
        },
      ],
      mSemiBold: [
        "14px",
        {
          fontWeight: "600",
        },
      ],
      mLarge: [
        "14px",
        {
          fontWeight: "large",
        },
      ],
      mRegular: [
        "14px",
        {
          fontWeight: "regular",
        },
      ],

      // small
      sBold: [
        "12px",
        {
          fontWeight: "700",
        },
      ],
      sSemiBold: [
        "12px",
        {
          fontWeight: "600",
        },
      ],
      sLarge: [
        "12px",
        {
          fontWeight: "large",
        },
      ],
      sRegular: [
        "12px",
        {
          fontWeight: "regular",
        },
      ],

      // xsmall
      xsBold: [
        "10px",
        {
          fontWeight: "700",
        },
      ],
      xsSemiBold: [
        "10px",
        {
          fontWeight: "600",
        },
      ],
      xsLarge: [
        "10px",
        {
          fontWeight: "large",
        },
      ],
      xsRegular: [
        "10px",
        {
          fontWeight: "regular",
        },
      ],
    },
  },
  plugins: [],
};
