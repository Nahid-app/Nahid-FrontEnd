import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughScreen from "../../screens/walkThroughScreen/WalkthroughScreen";
import SignUpScreen from "../../screens/signUpScreen/SignUpScreen";
import LoginScreen from "../../screens/loginScreen/LoginScreen";
import HomeTabScreen from "../../screens/homeScreen/HomeTabScreen";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator } from "react-native-paper";
import { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { AuthContext } from "../../context/AuthProvider";

const Stack = createNativeStackNavigator();

const WalkthroughRoute = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    // Check if user is logged in or not
    // Check secure store for user token
    SecureStore.getItemAsync("userToken")
      .then((userToken) => {
        if (userToken) {
          setUser(JSON.parse(userToken));
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen
            name="WalkthroughScreen"
            component={WalkthroughScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="loginScreen"
            component={LoginScreen}
            headerShown={false}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="HomeScreen"
          component={HomeTabScreen}
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitleStyle: { color: "#6949FF" },
            headerTitleAlign: Platform.OS === "android" ? "center" : "",
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default WalkthroughRoute;
