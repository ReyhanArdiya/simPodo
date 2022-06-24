import tagsSlice from "./slice";

const { getInitialState, actions, reducer } = tagsSlice;

const deepClone = obj => JSON.parse(JSON.stringify(obj));

describe("Tags slice", () => {
	const initialId = "1";
	const expectedState = {
		[initialId] : {
			color : expect.any(String),
			id    : expect.any(String),
			name  : expect.any(String),
		}
	};

	let initialState;
	beforeEach(() => {
		initialState = deepClone(getInitialState());
	});

	it("should contain these initialStates", () => {
		expect(initialState).toEqual(expectedState);
	});

	describe("reducers", () => {
		it("adds a new tag", () => {
			const id = initialId;

			const newState = reducer(
				initialState,
				actions.addTag({
					color : "red",
					id,
					name  : "tag1"
				})
			);

			expect(newState).toHaveProperty(id);
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
					id,
				})
			);

			expect(newState[id].color).toEqual("blue");
		});

		it("deletes a tag", () => {
			const id = initialId;

			const newState = reducer(
				initialState,
				actions.deleteTag(id)
			);

			expect(newState).not.toHaveProperty(id);
		});
	});
});