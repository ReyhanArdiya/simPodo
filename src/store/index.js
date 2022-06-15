import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import themeSlice, { themeSliceName } from "./theme/slice";
import todosSlice, { todosSliceName } from "./todos/slice";

const makeStore = () => configureStore({
	reducer : {
		[themeSliceName] : themeSlice.reducer,
		[todosSliceName] : todosSlice.reducer
	}
});

const wrapper = createWrapper(makeStore, { debug : false });

export default wrapper;