import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
	initialState : { dark : typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches },
	name         : "theme",
	reducers     : {
		toggleTheme(state) {
			state.dark = !state.dark;
		}
	}
});

export const { actions: themeSliceActions, name: themeSliceName } = themeSlice;
export default themeSlice;
