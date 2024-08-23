import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
  upload_status: "idle",
  isRegistered: false,
  redirectLogin: "",
  isLoggedIn: false,
  redirectHome: null,
  userDetails: null,
};

export const signup = createAsyncThunk("register", async (formData) => {
  let res = await axiosInstance.post("/user/signup", formData);
  let resultData = await res?.data;
  return resultData;
});
export const login = createAsyncThunk("login", async (formData) => {
  let res = await axiosInstance.post("/user/signin", formData);
  let response = await res?.data;
  return response;
});
// export const profileDetails = createAsyncThunk(
//     "profile",
//     async(formData) => {
//         let res = await axiosInstance.get("/user/profile-details",formData)
//         let response = await res?.data;
//         return response
//     }
// )
export const profileDetails = createAsyncThunk("profile", async () => {
  try {
    const res = await axiosInstance.get("/user/profile-details");

    return res.data;
  } catch (err) {
    console.error("Error fetching user details:", err);
  }
});

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("name");
    },
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isLoggedIn = true;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.upload_status = "sending data";
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.upload_status = "user registered successfully";
        localStorage?.setItem("name", payload?.data.first_name);
        state.isRegistered = true;
        state.redirectLogin = "/login";
      })
      .addCase(signup.rejected, (state) => {
        state.upload_status = "Failed to send data";
      })
      .addCase(login.pending, (state) => {
        state.upload_status = "Trying to log user";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.upload_status = "User logged in success";
        state.isLoggedIn = true;
        state.redirectHome = "/home";
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("name", payload?.data.first_name);
        //localStorage.setItem("email",payload?.data.email)
      })
      .addCase(login.rejected, (state) => {
        state.upload_status = "Failed to login";
      })
      .addCase(profileDetails.pending, (state) => {
        state.upload_status = "Loading data";
      })
      .addCase(profileDetails.fulfilled, (state, { payload }) => {
        state.upload_status = "Added details";
        state.userDetails = payload?.data;
        // localStorage.setItem("name",payload?.data.first_name)
      })
      .addCase(profileDetails.rejected, (state) => {
        state.upload_status = "Failed profile data fetching";
      });
  },
});

export const { logout, check_token } = authenticationSlice.actions;
export default authenticationSlice.reducer;
