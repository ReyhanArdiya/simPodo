import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ITag } from "../../models/tag";

export interface TagsSliceState {
	[id: string]: ITag;
}

const initialState: TagsSliceState = {};

const tagsSlice = createSlice({
	initialState,
	name     : "tags",
	reducers : {
		addTag(state, { payload: newTag }: PayloadAction<ITag>) {
			state[newTag.id] = newTag;
		},
		deleteTag(state, { payload: id }: PayloadAction<ITag["id"]>) {
			delete state[id];
		},
		updateTag(
			state,
			{ payload }: PayloadAction<Partial<ITag> & { id: string }>
		) {
			const { id } = payload;

			for (const key in payload) {
				if (key !== "id") {
					state[id][key as keyof ITag] = payload[key as keyof ITag]!;
				}
			}
		}
	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;
export default tagsSlice;
