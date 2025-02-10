import { configureStore } from "@reduxjs/toolkit";
import generalSlice from '../slice/generalSlice.js'

const appStore=configureStore({
  reducer:{
   general:generalSlice
  }
})

export default appStore