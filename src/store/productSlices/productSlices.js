import { baseUrl } from "@/utils/baseUrl";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  registerLoading: false,
  loginLoading: false,
  data: [],
  error: null,
};
const productsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state) => {
      state.loading = false;
    },

    //register functions
    registerStart: (state) => {
      state.registerLoading = true;
    },
    registerSuccess: (state, action) => {
      state.registerLoading = false;
      // state.users = action.payload;
    },
    registerFailure: (state) => {
      state.registerLoading = false;
    },

    //Login functions
    loginStart: (state) => {
      state.loginLoading = true;
    },
    loginSuccess: (state, action) => {
      state.loginLoading = false;
      // Login.users = action.payload;
    },
    loginFailure: (state) => {
      state.loginLoading = false;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
} = productsSlice.actions;

// eslint-disable-next-line no-unused-vars
export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(fetchUsersStart());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("++++++++++++++++++++++", data);
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    dispatch(fetchUsersFailure());
  }
};

//Register API

export const registerUser = (payload) => async (dispatch, getState) => {
  dispatch(registerStart());
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(`${baseUrl}/register`, options);
    // const data = await response.json();
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const loginUser = (payload) => async (dispatch, getState) => {
  dispatch(loginStart());
  try {
    axios.post("http://192.168.100.193:5000/api/login", {payload})
    .then((response) => {
      console.log(response);
    });

    // const data = await response.json();
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure());
  }
};

export default productsSlice.reducer;
