import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "./context/AuthProvider";
import Root from "./Root";
import { UniProvider } from "./context/UniProvider";
import { MembershipProvider } from "./context/MembershipProvider";

export default function App() {
  return (
    <AuthProvider>
      <UniProvider>
        <MembershipProvider>
          <Root />
        </MembershipProvider>
      </UniProvider>
    </AuthProvider>
  );
}
