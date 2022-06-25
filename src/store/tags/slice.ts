import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Tag {
	color: string;
	id: string;
	name: string;
}

export interface TagsSliceState {
	[id: string]: Tag;
}

const initialState: TagsSliceState = {};

const tagsSlice = createSlice({
	initialState,
	name     : "tags",
	reducers : {
		addTag(state, { payload: newTag }: PayloadAction<Tag>) {
			state[newTag.id] = newTag;
		},
		deleteTag(state, { payload: id }: PayloadAction<Tag["id"]>) {
			delete state[id];
		},
		updateTag(
			state,
			{ payload }: PayloadAction<Partial<Tag> & { id: string }>
		) {
			const { id } = payload;

			for (const key in payload) {
				if (key !== "id") {
					state[id][key as keyof Tag] = payload[key as keyof Tag]!;
				}
			}
		}
	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;
export default tagsSlice;
