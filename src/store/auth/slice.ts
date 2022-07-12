import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type ClientUser from "../../models/client/user";
import UserAlreadyLoggedInError from "../../models/errors/user-already-logged-in-error";
import UserNotLoggedInError from "../../models/errors/user-not-logged-in-error";
import replaceO1Proxies from "../../utils/replaceO1-proxies";

export interface AuthSliceState {
	user?: ClientUser;
}

const initialState: AuthSliceState = {};

const authSlice = createSlice({
	initialState,
	name     : "auth",
	reducers : {
		userDataUpdated(
			state,
			{ payload: newUserData }: PayloadAction<Omit<ClientUser, "_id">>
		) {
			const toBeUpdatedUser = state.user;
			if (!toBeUpdatedUser) {
				throw new UserNotLoggedInError();
			}

			replaceO1Proxies(toBeUpdatedUser, newUserData);
		},
		userLoggedIn(state, { payload: user }: PayloadAction<ClientUser>) {
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
		}
		// tokenRefreshed(state, { payload: token }) {
		// 	if (!state.user) {
		// 		throw new UserNotLoggedInError();
		// 	}

		// 	state.user.token = token;
		// }
	}
});

export const { actions: authSliceActions, name: authSliceName } = authSlice;

const selectCurrentUser = createSelector(
	[ (state: RootState) => state.auth.user ],
	user => user
);

export const authSliceSelectors = {
	selectCurrentUser,
	selectLocalFirebaseCredentials : createSelector(
		[ selectCurrentUser ],
		user => user?.authProviders.firebase.local
	)
};

export default authSlice;
