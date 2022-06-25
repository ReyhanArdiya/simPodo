import { createSlice } from "@reduxjs/toolkit";

export interface ThemeSliceState {
	dark: boolean;
}

const initialState: ThemeSliceState = {
	dark :
		typeof window !== "undefined" &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
};

const themeSlice = createSlice({
	initialState,
	name     : "theme",
	reducers : {
		toggleTheme(state) {
			state.dark = !state.dark;
		}
	}
});

export const { actions: themeSliceActions, name: themeSliceName } = themeSlice;
export default themeSlice;
