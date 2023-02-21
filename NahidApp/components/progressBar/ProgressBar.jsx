import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const ProgressBar = ({ step, steps, height }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [steps, width]);

  return (
    <>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{ height, borderRadius: height }}
        className="bg-gray200 overflow-hidden"
      >
        <Animated.View
          style={{
            height,
            borderRadius: height,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
          className="bg-primary w-full "
        />
      </View>
    </>
  );
};

export default ProgressBar;
