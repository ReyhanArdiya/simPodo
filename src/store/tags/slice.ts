import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ITag } from "../../models/tag";

export interface TagsSliceState {
	[tagId: ITag["id"]]: ITag;
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
			// CMT Partial here because we can selectively pick which prop to update
			{ payload }: PayloadAction<Partial<ITag>>
		) {
			const { id } = payload;

			for (const key in payload) {
				type K = Omit<ITag, "id">;

				if (key !== "id") {
					state[id!][key as keyof K] =
						payload[key as keyof K]!;
				}
			}
		}
	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;
export default tagsSlice;
