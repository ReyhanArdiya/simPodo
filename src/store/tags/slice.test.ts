import NoTagFoundError from "../../models/errors/no-tag-found-error";
import Tag from "../../models/tag";
import tagsSlice, { TagsSliceState } from "./slice";

const { actions, reducer } = tagsSlice;

describe("Tags slice", () => {
	const initialId = "1";

	let initialState: TagsSliceState;
	beforeEach(() => {
		initialState = {
			[initialId] : {
				color : expect.any(String),
				_id   : expect.any(String),
				name  : expect.any(String)
			}
		};
	});

	describe("reducers", () => {
		it("adds a new tag", () => {
			const _id = initialId;
			const newTag: Tag = new Tag(
				"tag1",
				"red",
				_id,
			);

			const newState = reducer(initialState, actions.tagAdded(newTag));

			expect(newState).toHaveProperty(_id);
			expect(newState[_id]).toEqual(newTag);
		});

		it("throws an error when updating a nonexistent tag", () => {
			const errorFn = () => reducer(
				initialState,
				actions.tagUpdated({
					_id  : "iDontExistBishhhh",
					name : "tag2"
				})
			);

			expect(errorFn).toThrow(NoTagFoundError);
		});

		it("updates a tag name", () => {
			const _id = initialId;

			const newState = reducer(
				initialState,
				actions.tagUpdated({
					_id  : _id,
					name : "tag2"
				})
			);

			expect(newState[_id]!.name).toEqual("tag2");
		});

		it("updates a tag color", () => {
			const _id = initialId;

			const newState = reducer(
				initialState,
				actions.tagUpdated({
					color : "blue",
					_id
				})
			);

			expect(newState[_id]!.color).toEqual("blue");
		});

		const changeK = "name";
		it(`updates a property (e.g.: ${changeK}) without changing the others`, () => {
			const _id = initialId;

			const { [_id]: oldTag } = initialState;
			const { [_id]: newTag } = reducer(
				initialState,
				actions.tagUpdated({
					[changeK] : "newVal",
					_id       : _id
				})
			);

			expect(newTag![changeK]).not.toBe(oldTag![changeK]);

			for (const key in Object.keys(newTag!).filter(k => k !== changeK)) {
				expect(newTag![key as keyof typeof newTag])
					.toBe(oldTag![key as keyof typeof oldTag]);
			}
		});

		it("deletes a tag", () => {
			const _id = initialId;

			const newState = reducer(initialState, actions.tagDeleted(_id));

			expect(newState).not.toHaveProperty(_id);
		});
	});
});
