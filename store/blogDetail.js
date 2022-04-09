import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  blogDetail: {},
  toc: [],
}

export const blogDetailSlice = createSlice({
  name: 'blogDetail',
  initialState,
  reducers: {
    setBlogDetail(state, action) {
      state.blogDetail = action.payload
    },
    setToc(state, action) {
      state.toc = action.payload
    }
  },
})