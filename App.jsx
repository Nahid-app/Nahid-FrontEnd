import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "./context/AuthProvider";
import Root from "./Root";
import { UniProvider } from "./context/UniProvider";

export default function App() {
  return (
    <AuthProvider>
      <UniProvider>
        <Root />
      </UniProvider>
    </AuthProvider>
  );
}
