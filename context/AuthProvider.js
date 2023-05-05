import react, { createContext } from "react";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import axiosConfig from "../helpers/axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // This code defines an AuthProvider component which provides authentication-related functionality to its child components.
  // The component uses the useState hook to define and manage states for user data, error messages, loading status, and visibility.
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        isLoading,

        login: (email, password) => {
          // communicate with backend and store token in SecureStore
          setIsLoading(true);
          axiosConfig
            .post("/login", {
              email,
              password,
              device_name: "mobile",
            })
            .then((response) => {
              const userResponse = {
                userToken: response.data.access_token,
              };
              setUser(userResponse);
              setError(null);
              SecureStore.setItemAsync(
                "userToken",
                JSON.stringify(userResponse)
              );
              setIsLoading(false);
            })
            .catch((error) => {
              setIsLoading(false);
              throw setError(error.response.data.message);
            });
        },
        logout: () => {
          setIsLoading(true);
          axiosConfig.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user.access_token}`;
          axiosConfig
            .post("/logout")
            .then((response) => {
              setUser(null);
              SecureStore.deleteItemAsync("user");
              setError(null);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setUser(null);
              SecureStore.deleteItemAsync("user");
              setError(error.response.data.message);
              setIsLoading(false);
            });
        },
        register: (
          name,
          email,
          password,
          password_confirmation,
          university,
          gender,
          date_birth,
          phone
        ) => {
          setIsLoading(true);
          axiosConfig
            .post(
              "/register",
              {
                name,
                email,
                password,
                password_confirmation,
                phone,
                university,
                gender,
                date_birth,
                device_name: "mobile",
              },
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              const userResponse = {
                userToken: response.data.access_token,
              };
              setUser(userResponse);
              setError(null);
              SecureStore.setItemAsync(
                "userToken",
                JSON.stringify(userResponse)
              );
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error.response.data);
              // const key = Object.keys(error.response.data.errors)[0];
              setIsLoading(false);
              throw setError(error.response.data.message);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
