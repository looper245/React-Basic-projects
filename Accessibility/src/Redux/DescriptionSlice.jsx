import { createSlice } from "@reduxjs/toolkit"


const descriptionSlice = createSlice({
  name: "description",
  initialState: {
    product: null
  },
  reducers: {
    setDescription: (state, action) => {
      state.product = action.payload
    }
  }
})

export const { setDescription } = descriptionSlice.actions
export default descriptionSlice.reducer
