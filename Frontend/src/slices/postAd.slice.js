import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

//1. postAd – Ad post karna
export const postAd = createAsyncThunk('postAdvertisement',async(postData)=>{
    const response = await fetch(" http://localhost:5000/api/v1/advertisement",{
        method:"POST",
      
        body: postData
        
    });
    if(!response.ok){
        throw new Error("Failed to postAd")
    }
    const reslt = await response.json()
    // console.log(reslt)
    return await reslt
})

export const editAd = createAsyncThunk('editAd', async ({ adId, updatedData }) => {
        try {
            const response = await fetch(` http://localhost:5000/api/v1/advertisement/aid/${adId}`, {
                method: "PUT",
                // headers: {
                //     "Content-Type": "application/json"
                // },
               body:updatedData
            });
    
            if (!response.ok) {
                throw new Error("Failed to editAd");
            }
    
            const result = await response.json();
            return result;
        } catch (error) {
            throw error;
        }
    });
//Delete ad

export const deleteAd = createAsyncThunk('deleteAdvertisement',async(deleteId)=>{
    const response = await fetch(`http://localhost:5000/api/v1/advertisement/aid/${deleteId}`,{
        method:"DELETE",
      
       
        
    });
    if(!response.ok){
        throw new Error("Failed to deleteAd")
    }
    const reslt = await response.json()
    // console.log(reslt)
    return await reslt
})

const postAdSlice = createSlice({
    name: "PostAd",
    initialState:{
        date:{},
        loading:false,
        error:null
        
    },
    reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(postAd.pending,(state)=>{
                state.loading=true
            })
            .addCase(postAd.fulfilled,(state,action)=>{
                state.loading=false,
                state.data=action.payload
            })
            .addCase(postAd.rejected,(state,action)=>{
                state.loading=false,
                state.error=action.error.message
            })
            .addCase(editAd.pending, (state) => {
                state.loading = true;
            })
            .addCase(editAd.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(editAd.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(deleteAd.pending,(state)=>{
                state.loading=true
            })
            .addCase(deleteAd.fulfilled,(state,action)=>{
                state.loading=false,
                state.data={}
            })
            .addCase(deleteAd.rejected,(state,action)=>{
                state.loading=false,
                state.error=action.error.message
            })
        } 

    })
    export default postAdSlice.reducer;










// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { logout } from "../slices/login.slice";

// // Post advertisement
// export const postAd = createAsyncThunk('postAd', async (postData) => {
//     const response = await fetch("http://localhost:5000/api/v1/advertisement", {
//         method: "POST",
//         body: postData 
//     });

//     if (!response.ok) {
//         throw new Error("Failed to Post Ad!");
//     }
//     return await response.json();
// });
//   // Update an advertisement
//   export const editAd = createAsyncThunk('editAd', async ({ adId, updatedData }) => {
//     try {
//         const response = await fetch(`http://localhost:5000/api/v1/advertisement/aid/${adId}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(updatedData)
//         });

//         if (!response.ok) {
//             throw new Error("Failed to editAd");
//         }

//         const result = await response.json();
//         return result;
//     } catch (error) {
//         throw error;
//     }
// });


// // Delete an advertisement
// export const deleteAd = createAsyncThunk('deleteAd', async ({ adId }) => {
//     try {
//         const response = await fetch(`http://localhost:5000/api/v1/advertisement/aid/${adId}`, {
//             method: "DELETE"
//         });

//         if (!response.ok) {
//             throw new Error("Failed to deleteAd");
//         }

//         const result = await response.json();
//         return result;
//     } catch (error) {
//         throw error;
//     }
// });


// const postAdSlice = createSlice({
//     name: "PostAd",
//     initialState: {
//         data: {},
//         loading: false,
//         error: null  
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(postAd.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(postAd.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = action.payload;
//             })
//             .addCase(postAd.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             .addCase(editAd.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(editAd.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = action.payload;
//             })
//             .addCase(editAd.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             .addCase(deleteAd.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(deleteAd.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = {}  
//             })
//             .addCase(deleteAd.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload || action.error.message;
                
//             });
//     }
// });

// export default postAdSlice.reducer;
