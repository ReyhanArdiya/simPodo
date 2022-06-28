import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ITag } from "../../models/tag";

export interface TagsSliceState {
	[tagId: ITag["_id"]]: ITag;
}

const initialState: TagsSliceState = {};

const tagsSlice = createSlice({
	initialState,
	name     : "tags",
	reducers : {
		addTag(state, { payload: newTag }: PayloadAction<ITag>) {
			state[newTag._id] = newTag;
		},
		deleteTag(state, { payload: _id }: PayloadAction<ITag["_id"]>) {
			delete state[_id];
		},
		updateTag(
			state,
			// CMT Partial here because we can selectively pick which prop to update
			{ payload }: PayloadAction<Partial<ITag>>
		) {
			const { _id } = payload;

			for (const key in payload) {
				type K = Omit<ITag, "_id">;

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
