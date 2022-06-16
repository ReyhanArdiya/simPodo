import todosSlice, { todosSliceActions } from "./slice";

const { reducer } = todosSlice;
let initialState;

describe("Todo slice reducer", () => {
	beforeEach(() => {
		initialState = todosSlice.getInitialState();
	});


	it("should add a new todo when calling addTodo", () => {
		const newState = reducer(initialState, todosSliceActions.addTodo({
			id   : "1",
			text : "test"
		}));

		expect(Object.entries(newState)).not.toHaveLength(0);
	});

});