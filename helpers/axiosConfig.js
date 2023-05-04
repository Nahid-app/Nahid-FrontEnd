import axios from "axios";

const instance = axios.create({
  baseURL: "http://47.254.73.147/api/",
});

export default instance;
