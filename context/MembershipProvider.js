import react, { createContext } from "react";
import { useState } from "react";
import axiosConfig from "../helpers/axiosConfig";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const MembershipContext = createContext();

export const MembershipProvider = ({ children }) => {
  // const [error, setError] = useState(null);
  const [membership, setMembership] = useState();
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(null);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  return (
    <MembershipContext.Provider
      value={{
        POSTmembership: (clubID) => {
          setIsLoading(true);
          // communicate with backend to store all S JSON file into Universities Variable
          axiosConfig.post("http://47.254.73.147/api/memberships/"),
            {
              club_id: clubID,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + user.userToken,
              },
            };
        },
      }}
    >
      {children}
    </MembershipContext.Provider>
  );
};
