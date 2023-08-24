import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            state.pop(action.payload);
        },
    }

})

export const {add,remove,increment,decrement} = cartSlice.actions;
export default cartSlice.reducer;
// return state.filter((item)=>item.id !== action.payload);