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
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  return (
    <UniContext.Provider
      value={{
        universities,
        clubs,
        GETUniversities: () => {
          setIsLoading(true);
          // communicate with backend to store all S JSON file into Universities Variable
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
              setIsLoading(false);
              throw setError(error.response.data.message);
            });
        },
        GETClubs: (id) => {
          setIsLoading(true);
          // communicate with backend to store all clubs JSON file into Clubs
          axiosConfig
            .get("http://47.254.73.147/api/universities/" + id, {
              headers: {
                Authorization: "Bearer " + user.userToken,
              },
            })
            .then((response) => {
              response.data.data.forEach((item) => {
                setClubs([item.name, item.university_id]);
              });
            })
            .catch((error) => {
              setIsLoading(false);
              throw setError(error.response.data.message);
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
