import axios from "axios";

const coreAPI = axios.create({
  baseURL: process.env.REACT_APP_CORE_API,
  timeout: 4000
});

coreAPI.interceptors.response.use(
  function(response) {
    // handle global response code here
    // console.log(response.status);
    // console.log(response);
    return response.data;
  },
  function(error) {
    // do something with the error
    console.log(error);
    return Promise.reject(error);
  }
);

export { coreAPI };
