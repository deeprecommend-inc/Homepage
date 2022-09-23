import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    blogDetail: {},
    toc: [],
    page: 1,
};

export const blogDetailSlice = createSlice({
    name: 'blogDetail',
    initialState,
    reducers: {
        setBlogDetail(state, action) {
            state.blogDetail = action.payload;
        },
        setToc(state, action) {
            state.toc = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },
});
