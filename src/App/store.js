import { configureStore } from '@reduxjs/toolkit'
import stdSlice from './stdDataSlice'
const store = configureStore({
  reducer:{
value:stdSlice
  }
})
export default store;