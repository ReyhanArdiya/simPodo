import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	initialState : {
		user : {
			localid  : "",
			token    : "",
			username : ""
		}
	},
	name     : "auth",
	reducers : {
		changeUsername(state, { payload: username }) {
			state.user.username = username;
		},
		login(state, { payload: { user:  { localid, token, username } } }) {
			state.user.localid = localid;
			state.user.token = token;
			state.user.username = username;
		},
		logout(state) {
			delete state.user;
		},
		refreshToken(state, { payload: token }) {
			state.user.token = token;
		},
	}
});

export const { actions: authSliceActions, name: authSliceName } = authSlice;
export default authSlice;
