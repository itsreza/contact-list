import axios from "axios";
// Axios HTTP Service Handler Wrapper
// Using this one for HTTP Request Because of Third Party Libraries better have Wrapper
export const getRequestMethod = (url, config) => {
  return axios.get(url, config);
};
