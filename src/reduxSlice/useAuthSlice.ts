import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserStateState {
    userDetails: User
}


export interface User{
    Token: string;

}





const initialState: UserStateState = {
    userDetails : {
        Token: "",

 
  } 
} 



export const useAuthSlice  = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        updateUserAuth: (state, action: PayloadAction<User>) => {
            state.userDetails = action.payload;
        }
    }
});
 
export const {updateUserAuth} = useAuthSlice.actions;

export default useAuthSlice.reducer;