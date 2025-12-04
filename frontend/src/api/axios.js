// import axios from "axios";

// const api = axios.create({
//   baseURL: "/api",         // Using proxy → no need for hardcoded localhost
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080", // backend URL
  headers: {
    "Content-Type": "application/json",
  },
});
