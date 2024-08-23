//https://wtsacademy.dedicateddevelopers.us/api/user/signup

import axios from "axios"
let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api"

if(process.env?.REACT_APP_ENV === "production"){
    adminUrl = "https://wtsacademy.dedicateddevelopers.us/api"

}

const profilePicBaseUrl = 'https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/';

export const baseURL = adminUrl;

// export  const profile_Url = (media) => {
//   console.log("Profile Pic Base URL: ", profilePicBaseUrl);
// console.log("Media: ", media);
//     return `${profilePicBaseUrl}${media}`;

// };

export const profile_Url = (media) => {
  if (!media) {
    console.error("No media provided to profile_Url function.");
    return '/path/to/default/image.png'; // Return a default image URL
  }
  
  return `${profilePicBaseUrl}${media}`;
};

//  export const profile_Url = (media) => {
//   return `${profilePicBaseUrl}${media}`;
// };

let axiosInstance = axios.create({
    baseURL,
})

axiosInstance.interceptors.request.use(
    async function (config) {
      const token = 
      localStorage.getItem("token") || sessionStorage.getItem("token");
      if(token !== null || token !== undefined){
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function ( err ) {
      return Promise.reject(err)
    }
  )
export default axiosInstance;

