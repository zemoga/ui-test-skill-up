import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://184.73.114.18:3100",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  mode: "no-cors",
});

export default {
  getBookProfile() {
    return apiClient.get(`clubs/club?id=b2073cce-5afc-4709-9e28-6129f265a3be`);
  },
};

// const BASE_URL = "http://184.73.114.18:3100";

// export default {
//   async getBookProfile() {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/clubs/club?id=b2073cce-5afc-4709-9e28-6129f265a3be`,
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           mode: "no-cors",
//         }
//       );
//       const data = await response.json();
//       if (response.status === 200) {
//         console.log("book:", data);
//         return { data, error: null };
//       }

//       return { data: null, error: "There is no data" };
//     } catch (error) {
//       return { data: null, error: "There was an error" };
//     }
//   },
// };
