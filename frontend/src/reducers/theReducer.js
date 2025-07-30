import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    myInfo:{},
    userToken:null,
    error: null,
    errorCode:null,
    products:null,
    settings:{},
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        theme: (state, action) => {
            return {
                ...state,
                theme: action.payload
            }
        },
        setTrending: (state, action) => {
            return {
                ...state,
                products: action.payload
            }
        },
        storeSettings: (state, action) => {
            return {
                ...state,
                settings: action.payload
            }
        }
    }
})

export const { theme, setTrending, storeSettings } = authSlice.actions
export default authSlice.reducer
