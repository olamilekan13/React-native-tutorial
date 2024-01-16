import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  UserName: string;
  Age: number;
  Email: string;
  Password: string;
  Token: string;
}

const initialState: UserState = {
  UserName: 'Olumide11',
  Age: 12,
  Email: 'xeonncodes@gmail.com',
  Password: '123456',
  Token: 'abcde12345',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.UserName = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.Age = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.Email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.Password = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.Token = action.payload;
    },
  },
});

export const { setUserName, setAge, setEmail, setPassword, setToken } = userSlice.actions;

export default userSlice.reducer;