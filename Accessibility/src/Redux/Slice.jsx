import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
    "product/fetch",
    async () => {
        let res = await fetch('https://mocki.io/v1/325a326e-4b5a-4cff-851e-ee17fddca2cf')
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
            state.data = action.payload.map((item, index) => ({
                ...item,
                product: `product ${index + 1}`
            }));
            state.loading = false
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = true
        })
    }
})

export default productsSlice.reducer
