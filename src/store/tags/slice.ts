import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import NoTagFoundError from "../../models/errors/no-tag-found-error";
import type Tag from "../../models/tag";

export type ITagsHash = {
	[tagId: Tag["_id"]]: Tag | undefined;
};

export interface TagsSliceState {
	tags: ITagsHash;
}

const tagsSlice = createSlice({
	initialState : {} as TagsSliceState,
	name         : "tags",
	reducers     : {
		tagAdded(state, { payload: newTag }: PayloadAction<Tag>) {
			state.tags[newTag._id] = newTag;
		},
		tagDeleted(state, { payload: _id }: PayloadAction<Tag["_id"]>) {
			delete state.tags[_id];
		},
		tagUpdated(
			state,
			{
				payload: newTagData
			}: PayloadAction<Partial<Omit<Tag, "_id">> & Pick<Tag, "_id">>
		) {
			const { _id } = newTagData;

			const toBeUpdatedTag = state.tags[_id];
			if (!toBeUpdatedTag) {
				throw new NoTagFoundError();
			}

			// CMT I cant use replaceO1 here since state will be a Proxy and
			// I can't check that :(
			// replaceO1(state[_id], newTagData);

			for (const key in newTagData) {
				type K = Omit<Tag, "_id">;

				if (key !== "_id") {
					toBeUpdatedTag[key as keyof K] =
						newTagData[key as keyof K]!;
				}
			}
		}
	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;

export const tagsSliceSelectors = {
	selectTagById : createSelector(
		[ (state: TagsSliceState, _id: Tag["_id"]) => state.tags[_id] ],
		tag => tag
	)
};

export default tagsSlice;
