// homeSlice (for managing states/data for home page)

import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        imageBasePath:{},
        genres: {}
    },
    reducers: {
        // actions
        getApiConfiguration: (state, action) => {
            // state.url = action.payload;
            state.imageBasePath = action.payload;
        },
        getGenres: (state, action)=>{
            state.genres = action.payload;
        }
    }
  })

// exporting actions
export const {getApiConfiguration, getGenres} = homeSlice.actions;

// exporting reducer
export default homeSlice.reducer;