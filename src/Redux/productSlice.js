import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
  upload_status: "idle",
  AllProduct: [],
  editData: [ ],
  totalPages:'',
};

export const createProduct = createAsyncThunk("/create", async (formData) => {
  let res = await axiosInstance.post("/product/create", formData);
  let result = await res?.data;
  return result;
});

export const listProducts = createAsyncThunk(
  "/productlist",
  async (_, { rejectWithValue }) => {
    try {
      let res = await axiosInstance.post("/product/list");
      let result = await res?.data; // Check the structure of the response
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const editProduct = createAsyncThunk(
  "/edit",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/product/detail/${id}`);
      const resData = await res?.data;
      return resData;
    } catch (error) {
      // Return a rejected value in case of an error
      return rejectWithValue(error.response?.data || "Failed to fetch product details");
    }
  }
);


export const updateProduct = createAsyncThunk("/update", async (formData) => {
  let res = await axiosInstance.post(
    `/product/update`,
    formData
  );
  let resData = await res?.data;
  return resData;
});

export const DeleteProduct = createAsyncThunk(
  "/delete", async(formData) =>{
    let res = await axiosInstance.post(`/product/remove`,formData)
    let resData = res?.data;
    return resData
  }
)

export const productCart = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.upload_status = "sending data";
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.upload_status = "success in creating product";
        if (payload) {
          state.AllProduct = [...state.AllProduct, payload]; // Ensure payload is valid before pushing
        }
      })
      .addCase(createProduct.rejected, (state) => {
        state.upload_status = "failed to send data";
      })
      .addCase(listProducts.pending, (state) => {
        state.upload_status = "sending data";
      })
      .addCase(listProducts.fulfilled, (state, { payload }) => {
        state.upload_status = "idle";
        state.AllProduct = payload?.data;
        state.totalPages=payload?.totalPages;
      })
      .addCase(listProducts.rejected, (state) => {
        state.upload_status = "Failed to send data";
      })
      .addCase(editProduct.pending, (state) => {
        state.upload_status = "loading";
      })
      .addCase(editProduct.fulfilled, (state, { payload }) => {
        state.upload_status = "idle";
        state.editData = payload?.data;
      })
      .addCase(editProduct.rejected, (state) => {
        state.upload_status = "rejected";
      })
      .addCase(DeleteProduct.pending,(state)=>{
        state.upload_status = "idle"
      })
      .addCase(DeleteProduct.fulfilled,(state)=>{
        state.upload_status = "user deleted successfully";
      })
      .addCase(DeleteProduct.rejected,(state)=>{
        state.upload_status="idle"
      })
  },
});
