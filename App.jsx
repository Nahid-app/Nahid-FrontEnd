import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "./context/AuthProvider";
import Root from "./Root";
import { UniProvider } from "./context/UniProvider";
import { EventsProvider } from "./context/EventsProvider";
import { ClubsProvider } from "./context/ClubsProvider";

export default function App() {
  return (
    <AuthProvider>
      <UniProvider>
        <ClubsProvider>
          <EventsProvider>
            <Root />
          </EventsProvider>
        </ClubsProvider>
      </UniProvider>
    </AuthProvider>
  );
}
