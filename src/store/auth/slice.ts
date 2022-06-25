import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../models/user";

interface TodoSliceState {
	user?: IUser;
}

const initialState: TodoSliceState = {};

const authSlice = createSlice(
	{
		initialState,
		name     : "auth",
		reducers : {
			changeUsername(state, { payload: username }) {
				if (!state.user) {
					throw new Error("User is not logged in");
				}

				state.user.username = username;
			},
			login(state, { payload: { user } }) {
				state.user = user;
			},
			logout(state) {
				delete state.user;
			},
			refreshToken(state, { payload: token }) {
				if (!state.user) {
					throw new Error("User is not logged in");
				}

				state.user.token = token;
			},
		}
	}
);

export const { actions: authSliceActions, name: authSliceName } = authSlice;
export default authSlice;
