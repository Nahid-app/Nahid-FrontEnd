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
  const [error, setError] = useState();
  const [events, setEvents] = useState([]);
  const [submissionMessage, setSubmissionMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYjRlYjkwN2Y1ZjBmY2RjY2E1ZjQ0YTRhMGY4NTEzNjIxYTI1YTA2MmZkM2E0NmUyYjJkNTIyZDYwNGZmNWQzNGRjNzA3MWQxNGUyY2IyMzIiLCJpYXQiOjE2ODMyODQ1MDMuMjI3MDM2LCJuYmYiOjE2ODMyODQ1MDMuMjI3MDQsImV4cCI6MTcxNDkwNjkwMy4yMjQxNzUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.hxCVJ9X4hEJCsXuVKeas8QJ0iYKLkPqvUOQ3QvM24cs8Z_uxWRT0VflJgOYOTGFRjReTXcfzI-_tuwIbkjf67-P3PtBoBXivUB8eclmG2EYZgAVe5dFYbF1o_ffehPvnPI0BEIR_bGIWVG4aenWYqoQlloOUqiFDfoWxW-HHXYNohKPpxkz5dpZ8NWwW_bvrM1Z9ExP90eTEeMAfaaByiJ5fth_Y0WaWB5ScNBQNVdrdcWjKg3Wj9zriD1yEUo8Sxn-Of_Ml2IvAns34PBHdOQyoIKcRAzhX1lBee9EnYv9V8VpFICeVPo_TzllRX9W9iUk2jFn_F4I8Laf7ZcY1ydQkbM2-h4ke_27uHXRn4IfuCKJfbK8opwqN-2ZCT4Pdn7GQviH9Mlqh8Z_RGqz1pASZ2B3WdCu3qscGQ2iVQqPxJ91u4sin0nFoTLBCuEdr9M5_Q76sb7tIx57FfzW2-WnBiNiLO4z05OdeETrsGSfuzYnNwlY_RhDvy4pbcyZaVOHm_hsxEAEg2lOoEIV5Cd048eB9nvpr2EVRiLZ1EEqj3xr2uZrmCNcHWM4JEG-3oHEBf8ajSxoBaf-ofHEw40zs4fyp8iSpCAdGI0pcB29_YuK6mwbL0WpLJKa-Qm-uz7KaG3mWgPj19rRbnnRO2SGdLIeO9_8VH1Z6_7Ok-wA";

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
                "Content-Type": "multipart/form-data",
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
        POSTEvents: ({
          club_id,
          title,
          description,
          type,
          gender_target,
          registration_deadline,
          start_time,
          end_time,
        }) => {
          // communicate with backend and store token in SecureStore
          axiosConfig
            .post("http://47.254.73.147/api/events", {
            club_id: club_id,
            title: title,
            description: description,
            type: type,
            gender_target: gender_target,
            registration_deadline: registration_deadline,
            start_time: start_time,
            end_time: end_time,
          }, {
              headers: {
                Authorization: "Bearer " + user.userToken,
                
              }              
            })
            .then((response) => {
              setSubmissionMessage(response.data.data);
            })
            .catch((error) => {
              console.log(error.response.data.message);                            
            });
        },
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
