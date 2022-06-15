import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import themeSlice, { themeSliceName } from "./theme/slice";

const makeStore = () => configureStore({ reducer : { [themeSliceName] : themeSlice.reducer } });

const wrapper = createWrapper(makeStore, { debug : false });

export default wrapper;