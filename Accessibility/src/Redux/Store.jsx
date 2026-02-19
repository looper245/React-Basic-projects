import {configureStore} from '@reduxjs/toolkit'
import productSlice from './Slice'
import descriptionReducer  from './DescriptionSlice'
const  Store = configureStore({
    reducer:{
        product:productSlice,
        description:descriptionReducer 
    }
})

export default Store