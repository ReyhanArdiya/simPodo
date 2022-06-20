import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authSlice, { authSliceName } from "./auth/slice";
import calendarSlice, { calendarSliceName } from "./calendar/slice";
import tagsSlice, { tagsSliceName } from "./tags/slice";
import themeSlice, { themeSliceName } from "./theme/slice";
import todosSlice, { todosSliceName } from "./todos/slice";

export const makeStore = () => configureStore({
	reducer : {
		[authSliceName]     : authSlice.reducer,
		[calendarSliceName] : calendarSlice.reducer,
		[tagsSliceName]     : tagsSlice.reducer,
		[themeSliceName]    : themeSlice.reducer,
		[todosSliceName]    : todosSlice.reducer,
	}
});

const wrapper = createWrapper(makeStore, { debug : false });

export default wrapper;