import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";

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
		themeToggled(state) {
			state.dark = !state.dark;
		}
	}
});

export const { actions: themeSliceActions, name: themeSliceName } = themeSlice;

export const themeSliceSelectors = {
	selectIsDark : createSelector(
		[ (state: RootState) => state.theme.dark ],
		dark => dark
	)
};

export default themeSlice;
