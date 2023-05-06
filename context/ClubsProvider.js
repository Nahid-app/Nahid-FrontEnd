import react, { createContext } from "react";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import axiosConfig from "../helpers/axiosConfig";
import Toast from "react-native-root-toast";
import { PopUpModal } from "../components/PopUpModal";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const ClubsContext = createContext();

export const ClubsProvider = ({ children }) => {
  // const [error, setError] = useState(null);
  let clubs = [];
  // const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <ClubsContext.Provider
      value={{
        isLoading,
        clubs,
        GETClubs: () => {
          setIsLoading(true);
          // communicate with backend and store token in SecureStore
          axiosConfig
            .get("http://47.254.73.147/api/clubs", {
              headers: {
                Authorization: "Bearer " + user.userToken,
              },
            })
            .then((response) => {
              // setClubs(response.data);
              var count = Object.keys(response.data.data).length;
              for (var i = 0; i < count; i++) {
                clubs.push({
                  label: response.data.data[i].name,
                  value: response.data.data[i].id,
                });
              }
              console.log(clubs);
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
    </ClubsContext.Provider>
  );
};
