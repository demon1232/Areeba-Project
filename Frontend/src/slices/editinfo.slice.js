import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updatedAd = createAsyncThunk('updatedAd', async ({ id, updatedData }) => {
    // console.log("Id Recieved by Update Thunk : ", id);
    const response = await fetch(`http://localhost:5000/api/v1/users/uid/${id}`, {
        method: "PUT",
        headers: {
         "Content-Type": "application/json"
         },
        body: JSON.stringify(updatedData)
    });

    if (!response.ok) {
        throw new Error("Failed to Updated Ad!");
    }
    return await response.json();
});

const updatedAdSlice = createSlice({
    name: "UpdatedAd",
    initialState :{
     data:{},
    loading:false,
    error:null ,
    // updated : false 
    },
    reducers: {},
    // async function - returns promise - promise can be pending , fulfilled , rejected
    extraReducers: (builder) => {
        builder
            .addCase(updatedAd.pending, (state) => {
                state.loading = true;
            })
            .addCase(updatedAd.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
                // state.updated = true;
            })
            .addCase(updatedAd.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default updatedAdSlice.reducer;