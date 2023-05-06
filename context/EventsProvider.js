import react, { createContext } from "react";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import axiosConfig from "../helpers/axiosConfig";
import Toast from "react-native-root-toast";
import { PopUpModal } from "../components/PopUpModal";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  // const [error, setError] = useState();
  const [events, setEvents] = useState([]);
  const [submissionMessage, setSubmissionMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <EventsContext.Provider
      value={{
        isLoading,
        events,
        submissionMessage,
        GETEvents: () => {
          setIsLoading(true);
          // communicate with backend and store token in SecureStore
          axiosConfig
            .get("http://47.254.73.147/api/events", {
              headers: {
                Authorization: "Bearer " + user.userToken,
              },
            })
            .then((response) => {
              setEvents(response.data.data);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setIsLoading(false);
            });
        },
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
