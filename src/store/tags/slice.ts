import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Tag } from "../../models/interfaces/tag.interface";

export interface TagsSliceState {
	[tagId: Tag["_id"]]: Tag;
}

const initialState: TagsSliceState = {};

const tagsSlice = createSlice({
	initialState,
	name     : "tags",
	reducers : {
		addTag(state, { payload: newTag }: PayloadAction<Tag>) {
			state[newTag._id] = newTag;
		},
		deleteTag(state, { payload: _id }: PayloadAction<Tag["_id"]>) {
			delete state[_id];
		},
		updateTag(
			state,
			// CMT Partial here because we can selectively pick which prop to update
			{ payload }: PayloadAction<Partial<Tag>>
		) {
			const { _id } = payload;

			for (const key in payload) {
				type K = Omit<Tag, "_id">;

				if (key !== "_id") {
					state[_id!][key as keyof K] =
						payload[key as keyof K]!;
				}
			}
		}
	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;
export default tagsSlice;
