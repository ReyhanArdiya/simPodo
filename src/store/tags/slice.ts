import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type Tag from "../../models/tag";

export interface TagsSliceState {
	[tagId: Tag["_id"]]: Tag;
}

const initialState: TagsSliceState = {};

const tagsSlice = createSlice({
	initialState,
	name     : "tags",
	reducers : {
		tagAdded(state, { payload: newTag }: PayloadAction<Tag>) {
			state[newTag._id] = newTag;
		},
		tagDeleted(state, { payload: _id }: PayloadAction<Tag["_id"]>) {
			delete state[_id];
		},
		tagUpdated(
			state,
			{ payload: newTagData }: PayloadAction<Partial<Omit<Tag, "_id">> & Pick<Tag, "_id">>
		) {
			const { _id } = newTagData;

			// CMT I cant use replaceO1 here since state will be a Proxy and
			// I can't check that :(
			// replaceO1(state[_id], newTagData);

			for (const key in newTagData) {
				type K = Omit<Tag, "_id">;

				if (key !== "_id") {
					state[_id][key as keyof K] =
						newTagData[key as keyof K]!;
				}
			}
		}
	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;
export default tagsSlice;
