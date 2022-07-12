import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import UserAlreadyLoggedInError from "../../models/errors/user-already-logged-in-error";
import UserNotLoggedInError from "../../models/errors/user-not-logged-in-error";
import type User from "../../models/base/user";
import replaceO1Proxies from "../../utils/replaceO1-proxies";

type StoreUser = Omit<User, "tags" | "todos">;

export interface AuthSliceState {
	user?: StoreUser;
}

const initialState: AuthSliceState = {};

const authSlice = createSlice({
	initialState,
	name     : "auth",
	reducers : {
		userDataUpdated(
			state,
			{ payload: newUserData }: PayloadAction<Omit<StoreUser, "_id">>
		) {
			const toBeUpdatedUser = state.user;
			if (!toBeUpdatedUser) {
				throw new UserNotLoggedInError();
			}

			replaceO1Proxies(toBeUpdatedUser, newUserData);
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
		}
	}
});

export const { actions: authSliceActions, name: authSliceName } = authSlice;

export const authSliceSelectors = {
	selectCurrentUser : createSelector(
		[ (state: RootState) => state.auth.user ],
		user => user
	)
};

export default authSlice;
