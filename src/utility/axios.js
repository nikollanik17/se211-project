import axios from "axios";

const baseURL = "https://frozen-reaches-41835.herokuapp.com/api";

const axiosConfig = axios.create({
  baseURL: baseURL,
});

export { baseURL };

export default axiosConfig;
