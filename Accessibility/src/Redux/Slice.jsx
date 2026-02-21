import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
    "product/fetch",
    async () => {
        let res = await fetch('https://api.escuelajs.co/api/v1/products')
        
        return await res.json()
    }
)

const initialState = {
    data: [],
    loading: false,
    error: null
}



let productsSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = true
        })
    }
})

export default productsSlice.reducer
