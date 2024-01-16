import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";


const rootReducer = combineReducers({
    user: UserSlice,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;