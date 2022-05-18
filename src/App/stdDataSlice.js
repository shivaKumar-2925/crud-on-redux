import { createSlice } from "@reduxjs/toolkit";
import { idData } from "./AllStd";
const studentSlice = createSlice({
  name:'studentData',
  initialState:idData,
  reducers:{
    addData:(state,action)=>{
state.push(action.payload)
    },
    updateData:(state,action)=>{
      state.map(ele=>{
        if(ele.id==action.payload.id){
          // state.splice(state.indexOf(ele),state.indexOf(ele)+1,action.payload)
          state[state.indexOf(ele)]=action.payload
        }
      })
    },
    deleteData:(state,action)=>{
        return(state.filter(ele=>{
          return ele.id != action.payload
        }))
        
    }
  }
})
export const {addData,updateData,deleteData} =studentSlice.actions
export default studentSlice.reducer;