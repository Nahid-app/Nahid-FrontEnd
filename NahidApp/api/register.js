import axios from "axios";
let userToken;
export function register(values, { navigation }) {
  axios
    .post(
      "https://3tivhvae37dhevdfev7qch7gha0zqora.lambda-url.me-south-1.on.aws/api/register/",
      {
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      console.log(response);
      navigation.navigate("HomeScreen");
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
}
