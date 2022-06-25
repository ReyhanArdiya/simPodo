import type { ITag } from "../../models/tag";
import tagsSlice, { TagsSliceState } from "./slice";

const { actions, reducer } = tagsSlice;

describe("Tags slice", () => {
	const initialId = "1";

	let initialState: TagsSliceState;
	beforeEach(() => {
		initialState = {
			[initialId] : {
				color : expect.any(String),
				id    : expect.any(String),
				name  : expect.any(String)
			}
		};
	});

	describe("reducers", () => {
		it("adds a new tag", () => {
			const id = initialId;
			const newTag: ITag = {
				color : "red",
				id,
				name  : "tag1"
			};

			const newState = reducer(initialState, actions.addTag(newTag));

			expect(newState).toHaveProperty(id);
			expect(newState[id]).toEqual(newTag);
		});

		it("updates a tag name", () => {
			const id = initialId;

			const newState = reducer(
				initialState,
				actions.updateTag({
					id,
					name : "tag2"
				})
			);

			expect(newState[id].name).toEqual("tag2");
		});

		it("updates a tag color", () => {
			const id = initialId;

			const newState = reducer(
				initialState,
				actions.updateTag({
					color : "blue",
					id
				})
			);

			expect(newState[id].color).toEqual("blue");
		});

		const changeK = "name";
		it(`updates a property (e.g.: ${changeK}) without changing the others`, () => {
			const id = initialId;

			const { [id]: oldTag } = initialState;
			const { [id]: newTag } = reducer(
				initialState,
				actions.updateTag({
					[changeK] : "newVal",
					id
				})
			);

			expect(newTag[changeK]).not.toBe(oldTag[changeK]);

			for (const key in Object.keys(newTag).filter(k => k !== "name")) {
				expect(newTag[key as keyof typeof newTag])
					.toBe(oldTag[key as keyof typeof oldTag]);
			}
		});

		it("deletes a tag", () => {
			const id = initialId;

			const newState = reducer(initialState, actions.deleteTag(id));

			expect(newState).not.toHaveProperty(id);
		});
	});
});
