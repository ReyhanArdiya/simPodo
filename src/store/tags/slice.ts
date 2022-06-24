import { createSlice } from "@reduxjs/toolkit";

const tagsSlice = createSlice({
	initialState : {
		"1" : {
			color : "red",
			id    : "tagId",
			name  : "tagName"
		}
	},
	name     : "tags",
	reducers : {
		addTag(state, { payload: newTag }) {
			state[newTag.id] = newTag;
		},
		deleteTag(state, { payload: id }) {
			delete state[id];
		},
		updateTag(state, { payload: { color, id, name } }) {
			state[id].color = color;
			state[id].name = name;
		},

	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;
export default tagsSlice;
