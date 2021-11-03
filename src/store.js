import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  val: ''
}

const decimalSlice = createSlice({
  name: 'decimal',
  initialState,
  reducers: {
    decimalConverted(state, action) {
      // console.log('state', state)
      // console.log('payload', action.payload)
      state.val = action.payload
      // console.log(state)
    }
  }
})


export default configureStore({
  reducer: {
    converted: decimalSlice.reducer
  }
})

export const { decimalConverted } = decimalSlice.actions