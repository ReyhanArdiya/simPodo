import Tag from "../../models/interfaces/tag.interface";
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

			const newState = reducer(initialState, actions.addTag(newTag));

			expect(newState).toHaveProperty(_id);
			expect(newState[_id]).toEqual(newTag);
		});

		it("updates a tag name", () => {
			const _id = initialId;

			const newState = reducer(
				initialState,
				actions.updateTag({
					_id  : _id,
					name : "tag2"
				})
			);

			expect(newState[_id].name).toEqual("tag2");
		});

		it("updates a tag color", () => {
			const _id = initialId;

			const newState = reducer(
				initialState,
				actions.updateTag({
					color : "blue",
					_id
				})
			);

			expect(newState[_id].color).toEqual("blue");
		});

		const changeK = "name";
		it(`updates a property (e.g.: ${changeK}) without changing the others`, () => {
			const _id = initialId;

			const { [_id]: oldTag } = initialState;
			const { [_id]: newTag } = reducer(
				initialState,
				actions.updateTag({
					[changeK] : "newVal",
					_id       : _id
				})
			);

			expect(newTag[changeK]).not.toBe(oldTag[changeK]);

			for (const key in Object.keys(newTag).filter(k => k !== changeK)) {
				expect(newTag[key as keyof typeof newTag])
					.toBe(oldTag[key as keyof typeof oldTag]);
			}
		});

		it("deletes a tag", () => {
			const _id = initialId;

			const newState = reducer(initialState, actions.deleteTag(_id));

			expect(newState).not.toHaveProperty(_id);
		});
	});
});
