import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false
}

export const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false,
      localStorage.removeItem('token')
    }
  }
})