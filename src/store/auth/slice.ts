import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserAlreadyLoggedInError from "../../models/errors/user-already-logged-in-error";
import UserNotLoggedInError from "../../models/errors/user-not-logged-in-error";
import type User from "../../models/user";

type StoreUser = Omit<User, "tags" | "todos">;

export interface AuthSliceState {
	user?: StoreUser;
}

const initialState: AuthSliceState = {};

const authSlice = createSlice(
	{
		initialState,
		name     : "auth",
		reducers : {
			// TODO change this to userUpdated
			changeUsername(state, { payload: username }: PayloadAction<User["username"]>) {
				if (!state.user) {
					throw new UserNotLoggedInError();
				}

				state.user.username = username;
			},

			userLoggedIn(state, { payload: user }: PayloadAction<StoreUser>) {
				if (state.user) {
					throw new UserAlreadyLoggedInError();
				}

				state.user = user;
			},
			userLoggedOut(state) {
				if (!state.user) {
					throw new UserNotLoggedInError();
				}

				delete state.user;
			},
			tokenRefreshed(state, { payload: token }) {
				if (!state.user) {
					throw new UserNotLoggedInError();
				}

				state.user.token = token;
			},
		},

	}
);

export const { actions: authSliceActions, name: authSliceName } = authSlice;
export default authSlice;
