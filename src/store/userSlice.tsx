import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserDatatype = {
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  image: string;
};

export type UserLoginType = {
  email: string;
  password: string;
};

export type InitialStateType = {
  user: UserDatatype | null;
  isLoggedIn: Boolean;
  error: string;
  isError: Boolean;
};


const initialState: InitialStateType =  {
  user: localStorage.getItem("user") ? (JSON.parse(localStorage.getItem("user") as string) as UserDatatype) :  null,
  isLoggedIn: false,
  error: "",
  isError: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDatatype>) => {
      state.user=action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user",JSON.stringify(action.payload))
    },
    resetUser: (state) => {
      localStorage.removeItem("user");
      state.user=null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
