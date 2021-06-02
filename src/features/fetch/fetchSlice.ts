import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios'
import getData from '../../.json'

type UserDataType = typeof getData

type FetchType = {
    data: UserDataType
}

export const fetchGetData = createAsyncThunk('fetch/get', async () => {
    const res = axios.get<UserDataType>('https://jsonplaceholder.typicode.com/users')
    return res
})

const initialState: FetchType = {
    data: getData
}

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetData.fulfilled, (state, action) => {
            return {
                ...state,
                data: action.payload.data
            }
        })
    }
})

export const selectData = (state: RootState) => state.fetch.data

export default fetchSlice.reducer