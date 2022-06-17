import todosSlice, { todoSliceReducer, todosSliceActions } from "./slice";

const deepClone = obj => JSON.parse(JSON.stringify(obj));

describe("todoSlice", () => {
	// TODO change this to type with mongoose Model once created
	const expectedState = {
		completedTotal : expect.any(Number),
		todos          : {
			todoId : expect.objectContaining({
				completed : expect.any(Boolean),
				id        : expect.any(String),
				title     : expect.any(String)
			})
		}
	};

	let initialState;
	beforeEach(() => {
		initialState = deepClone(todosSlice.getInitialState());
	});

	it("should contain these initialState", () => {
		expect(initialState).toEqual(expectedState);
	});

	describe("reducers", () => {
		it("adds a todo", () => {
			const newTodo = {
				completed : false,
				id        : "todoId2",
				title     : "todo2"
			};

			const newState = todosSlice.reducer(
				initialState,
				todosSlice.actions.addTodo(newTodo)
			);

			expect(newState.todos).toHaveProperty(newTodo.id, newTodo);
		});

		it("deletes a todo", () => {
			const todoId = "todoId";

			const newState = todosSlice.reducer(
				initialState,
				todosSlice.actions.deleteTodo(todoId)
			);

			expect(newState.todos).not.toHaveProperty(todoId);
		});

		it("replaces the todos property", () => {
			const newTodos = {
				todoId1 : {
					completed : false,
					id        : "todoId1",
					title     : "todo1"
				},
				todoId2 : {
					completed : false,
					id        : "todoId2",
					title     : "todo2"
				}
			};

			const newState = todosSlice.reducer(
				initialState,
				todosSliceActions.replaceTodos(newTodos)
			);

			expect(newState.todos).toEqual(newTodos);
		});

		it("completes a todo if it hasn't been completed", () => {
			initialState.todos = {
				1 : {
					completed : false,
					id        : "1",
					title     : "todo1"
				},
				2 : {
					completed : false,
					id        : "2",
					title     : "todo2"
				},
				3 : {
					completed : false,
					id        : "3",
					title     : "todo3"
				},
				4 : {
					completed : false,
					id        : "4",
					title     : "todo4"
				}
			};

			const todoId = "3";

			const newState = todoSliceReducer(
				initialState,
				todosSliceActions.completeTodo(todoId)
			);


			expect(newState.todos[todoId].completed).toBe(true);
			expect(newState.completedTotal).toBe(
				initialState.completedTotal + 1
			);
		});

		it("doesn't increment completedTotal if it completes an already completed todo", () => {
			initialState.todos = {
				1 : {
					completed : true,
					id        : "1",
					title     : "todo1"
				}
			};

			const todoId = 1;

			const newState = todoSliceReducer(
				initialState,
				todosSliceActions.completeTodo(todoId)
			);

			expect(newState.completedTotal).toBe(initialState.completedTotal);
		});

		it("updates a todo", () => {
			const initialState = {
				todos : {
					"1" : {
						completed : false,
						id        : "1",
						title     : "todo1"
					}
				}
			};

			const todoId = "1";
			const newTodoData = {
				completed : true,
				id        : todoId,
				title     : "todo1 updated",
			};

			const newState = todoSliceReducer(
				initialState,
				todosSliceActions.updateTodo(newTodoData)
			);

			// Update the todo object, not replace it
			expect(newState.todos).toHaveProperty(todoId);
			expect(newState.todos[todoId]).not.toBe(newTodoData);

			expect(newState.todos[todoId]).not.toEqual(
				initialState.todos[todoId]
			);
		});
	});
});
