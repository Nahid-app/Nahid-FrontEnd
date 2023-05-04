import axios from "axios";
import Toast from "react-native-root-toast";
let userToken;

export function register(
  values,
  { navigation },
  error,
  setErrorEmail,
  errorPassword
) {
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
      userToken = response.data["access_token"];

      if (userToken) {
        navigation.navigate("HomeScreen");
        Toast.show("تم إنشاء الحساب بنجاح");
      }
    })
    .catch(function (error) {
      if (error.response) {
        if (error.response.data["errors"]["email"]) {
          setErrorEmail("");
          return setErrorEmail(error.response.data["errors"]["email"]);
        }
        if (error.response.data["errors"]["password"]) {
          setErrorEmail();
          return setErrorEmail(error.response.data["errors"]["password"]);
        } else {
          Toast.show("خطأ في تسجيل الدخول");
        }
      }
    });
}
