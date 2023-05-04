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
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [logo, setLogo] = useState(null);
  const [clubsCount, setClubsCount] = useState(null);
  const [studentCount, setStudentCount] = useState(null);

  return (
    <UniContext.Provider
      value={{
        name,
        id,
        description,
        location,
        logo,
        clubsCount,
        studentCount,

        // userInfos,
        GETUniversities: (user) => {
          // communicate with backend and store token in SecureStore
          axiosConfig
            .get("/universities", {
              headers: {
                Authorization: "Bearer " + user.userToken,
              },
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              // console.log(error.response.data.message);
              // const key = Object.keys(error.response.data.errors)[0];
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
