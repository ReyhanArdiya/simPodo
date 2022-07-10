import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import NoTagFoundError from "../../models/errors/no-tag-found-error";
import type Tag from "../../models/tag";
import replaceO1Proxies from "../../utils/replaceO1-proxies";

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

			replaceO1Proxies(toBeUpdatedTag, newTagData);
		}
	}
});

export const { actions: tagsSliceActions, name: tagsSliceName } = tagsSlice;

export const tagsSliceSelectors = {
	selectTagById : createSelector(
		[ (state: RootState, _id: Tag["_id"]) => state.tags.tags[_id] ],
		tag => tag
	)
};

export default tagsSlice;
