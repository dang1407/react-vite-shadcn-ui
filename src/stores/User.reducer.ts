import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface UserState {
  isLogined: boolean;
  companyId?: string;
  userData?: Employee | Object;
}

const initialState : UserState = {
  isLogined: false,
  companyId: "",
  userData: {}
}

export const UserSlice = createSlice({
  name: "UserStore",
  initialState,
  reducers: {
    /**
     * Hàm đặt trạng thái login cho store
     * @param state State hiện tại của User Slice
     * @param action Action được set cho trạng thái login
     */
    setIsLogined: (state, action: PayloadAction<boolean>) => {
      state.isLogined = action.payload
    } 
  }
})

export const {setIsLogined} = UserSlice.actions;
export const loginState = (state: RootState) => state.User.isLogined;
export default UserSlice.reducer;