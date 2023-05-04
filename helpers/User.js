import * as SecureStore from "expo-secure-store";

SecureStore.getItemAsync("userToken").then((userToken) => {
  if (userToken) {
    setUser(JSON.parse(userToken));
  }
  setIsLoading(false);
});
