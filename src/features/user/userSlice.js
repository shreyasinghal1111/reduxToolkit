import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    users:[{id:1,text:"helllo"}]
}
export const userSlice=createSlice({
   name:"user",
   initialState,
   reducers:{
    // state vo values legi jo currently abhi initial state mai hai
    
    setUser:(state,action)=>{
        const user={
            id:nanoid(),
            text:action.payload
        }
        // ab values  ko state mai add karna hai
        // main line hai ki state mai users array mai user ko add karna hai
        state.users.push(user)
    },
    removeUser:(state,action)=>{
        // state mai users array mai se user ko remove karna hai
        state.users=state.users.filter((user)=>user.id !== action.payload)

    }
   }

})
// actions ko export karna hai jisee individually access kr skte h
export const {setUser,removeUser}=userSlice.actions