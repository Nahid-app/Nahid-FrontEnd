import react, { createContext } from "react";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import axiosConfig from "../helpers/axiosConfig";
import Toast from "react-native-root-toast";
import { PopUpModal } from "../components/PopUpModal";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const UniContext = createContext();

export const UniProvider = ({ children }) => {
  // const [error, setError] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <UniContext.Provider
      value={{
        universities,
        clubs,
        GETUniversities: () => {
          setIsLoading(true);
          // communicate with backend and store token in SecureStore
          axiosConfig
            .get("http://47.254.73.147/api/universities", {
              headers: {
                Authorization: "Bearer " + user.userToken,
              },
            })
            .then((response) => {
              setUniversities(response.data.data);
            })
            .catch((error) => {
              console.log(error);
            });
        },
        GETClubs: (id) => {
          setIsLoading(true);
          // communicate with backend and store token in SecureStore
          axiosConfig
            .get("http://47.254.73.147/api/universities/" + id, {
              headers: {
                Authorization: "Bearer " + user.userToken,
              },
            })
            .then((response) => {
              setClubs(response.data.data.clubs);
            })
            .catch((error) => {
              console.log(error);
            });
        },
      }}
    >
      {children}
    </UniContext.Provider>
  );
};

// const { university, setUniversity, GETUniversities } = useContext(UniContext);
// const { user } = useContext(AuthContext);
// useEffect(() => {
//   getUniData(user);
// }, []);

// function getUniData(user) {
//   console.log(GETUniversities(user));
// }
