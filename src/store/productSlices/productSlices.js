
import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: [],
    error: null
  }
const productsSlice = createSlice({
  name: 'users',
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
    }
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = productsSlice.actions;

// eslint-disable-next-line no-unused-vars
export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(fetchUsersStart());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("++++++++++++++++++++++", data)
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    dispatch(fetchUsersFailure());
  }
};

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//     const response = await axios.get('/api/users');
//     return response.data;
//   });
  

export default productsSlice.reducer;
