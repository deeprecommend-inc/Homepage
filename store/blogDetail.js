import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  blogDetail: {},
}

export const blogDetailSlice = createSlice({
  name: 'blogDetail',
  initialState,
  reducers: {
    setBlogDetail(state, action) {
      state.blogDetail = action.payload
    },
  },
})