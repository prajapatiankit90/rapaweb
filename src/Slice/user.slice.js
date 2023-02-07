import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const createUser = createAsyncThunk('users/create', async ({data}) => {
  const response = await axios.post('http://203.109.68.94:2110/api/ApiServices/retNewUserInsert',data)
  return response.data
})

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get('http://203.109.68.94:2110/api/ApiServices/retUserMas')
  return JSON.parse(response.data)
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    loading: 'idle',
    error: null,
  },
  reducers: {  
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userList.push(action.payload)
    })

    

    builder.addCase(getUsers.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.userList = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})


export default usersSlice.reducer