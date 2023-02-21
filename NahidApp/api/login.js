import axios from "axios";

let userToken;
export function postLogin(values, { navigation }) {
  axios
    .post(
      "https://3tivhvae37dhevdfev7qch7gha0zqora.lambda-url.me-south-1.on.aws/api/login/",
      {
        email: values.email,
        password: values.password,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      userToken = response.data["access_token"];
      if (userToken) {
        navigation.navigate("HomeScreen");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
