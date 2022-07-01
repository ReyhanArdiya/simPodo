import NoTodoFoundError from "../../models/errors/no-todo-found-error";
import Todo from "../../models/todo";
import todosSlice, {
	ITodoHash,
	todoSliceReducer,
	todoSliceSelectors,
	todosSliceActions,
	TodosSliceState
} from "./slice";

let initialState: TodosSliceState;
beforeEach(() => {
	initialState = {
		todos : {
			todoId : {
				completed : false,
				_id       : "todoIdFromMongoose",
				title     : "todoTitle",
				tagId     : "tagId"
			}
		}
	};
});

describe("todoSlice actions", () => {
	it("adds a todo", () => {
		const newTodo = new Todo("todo2", false, "tagId", "todoId2");

		const newState = todosSlice.reducer(
			initialState,
			todosSlice.actions.todoAdded(newTodo)
		);

		expect(newState.todos).toHaveProperty(newTodo._id, newTodo);
	});

	it("deletes a todo", () => {
		const todoId = "todoId";

		const newState = todosSlice.reducer(
			initialState,
			todosSlice.actions.todoDeleted(todoId)
		);

		expect(newState.todos).not.toHaveProperty(todoId);
	});

	it("replaces the todos property", () => {
		const newTodos: ITodoHash = {
			todoId1 : {
				completed : false,
				_id       : "todoId1",
				title     : "todo1",
				tagId     : "tagId"
			},
			todoId2 : {
				completed : false,
				_id       : "todoId2",
				title     : "todo2",
				tagId     : "tagId"
			}
		};

		const newState = todosSlice.reducer(
			initialState,
			todosSliceActions.todosReplaced(newTodos)
		);

		expect(newState.todos).toEqual(newTodos);
	});

	it("completes a todo if it hasn't been completed", () => {
		initialState.todos = {
			1 : {
				completed : false,
				_id       : "1",
				title     : "todo1",
				tagId     : "tagId"
			},
			2 : {
				completed : false,
				_id       : "2",
				title     : "todo2",
				tagId     : "tagId"
			},
			3 : {
				completed : false,
				_id       : "3",
				title     : "todo3",
				tagId     : "tagId"
			},
			4 : {
				completed : false,
				_id       : "4",
				title     : "todo4",
				tagId     : "tagId"
			}
		};

		const todoId = "3";

		const newState = todoSliceReducer(
			initialState,
			todosSliceActions.todoCompleted(todoId)
		);

		expect(newState.todos[todoId]?.completed).toBe(true);
	});

	it("throws an error when updating a nonexistent tag", () => {
		const errorFn = () => todoSliceReducer(
			initialState,
			todosSliceActions.todoUpdated({
				_id : "idontexitsbishhh"
			})
		);

		expect(errorFn).toThrow(NoTodoFoundError);
	});

	it("updates a todo selectively without changing other props", () => {
		const todoId = "1";

		initialState.todos = {
			[todoId] : {
				completed : false,
				_id       : todoId,
				title     : "todo1",
				tagId     : "tagId"
			}
		};

		const newTodoData = new Todo("todo1 updated", true, "tagId", todoId);

		const newState = todoSliceReducer(
			initialState,
			todosSliceActions.todoUpdated(newTodoData)
		);

		const oldTodo = initialState.todos[todoId];
		const newTodo = newState.todos[todoId];

		// Update the todo object, not replace it
		expect(newState.todos).toHaveProperty(todoId);
		expect(newTodo).not.toBe(newTodoData);

		expect(newTodo?._id).toEqual(oldTodo?._id);
		expect(newTodo?.completed).not.toEqual(oldTodo?.completed);
		expect(newTodo?.title).not.toEqual(oldTodo?.title);
	});
});

describe("todoSlice selectors", () => {
	it("derives total of completed todos", () => {
		const initialState: TodosSliceState = {
			todos : {
				1 : {
					_id       : "1",
					title     : "1",
					completed : false,
					tagId     : "tagId"
				},
				2 : {
					_id       : "2",
					title     : "2",
					completed : false,
					tagId     : "tagId"
				},
				3 : {
					_id       : "3",
					title     : "3",
					completed : true,
					tagId     : "tagId"
				},
				4 : {
					_id       : "4",
					title     : "4",
					completed : true,
					tagId     : "tagId"
				},
				5 : {
					_id       : "5",
					title     : "5",
					completed : false,
					tagId     : "tagId"
				}
			}
		};

		expect(todoSliceSelectors.selectCompletedTotal(initialState)).toBe(2);
	});

	it("selects a Todo by id", () => {
		const availableTodoId = "1";

		const initialState: TodosSliceState = {
			todos : {
				[availableTodoId] : {
					_id       : "1",
					title     : "1",
					completed : false,
					tagId     : "tagId"
				}
			}
		};

		expect(
			todoSliceSelectors.selectTodoById(initialState, availableTodoId)
		).toEqual(initialState.todos[availableTodoId]);

		expect(
			todoSliceSelectors.selectTodoById(initialState, "notAvailable")
		).toBeUndefined();
	});

	it("filters Todo by tagId", () => {
		const filterTagId = "selecThis";

		initialState.todos = {
			1 : {
				completed : false,
				_id       : "1",
				title     : "todo1",
				tagId     : filterTagId
			},
			2 : {
				completed : false,
				_id       : "2",
				title     : "todo2",
				tagId     : "tagId"
			},
			3 : {
				completed : false,
				_id       : "3",
				title     : "todo3",
				tagId     : filterTagId
			},
			4 : {
				completed : false,
				_id       : "4",
				title     : "todo4",
				tagId     : "tagId"
			}
		};

		const filteredTodos = todoSliceSelectors.filterByTagId(
			initialState,
			filterTagId
		);

		expect(filteredTodos).toHaveLength(2);
		expect(filteredTodos[0]).toEqual(initialState.todos[1]);
		expect(filteredTodos[1]).toEqual(initialState.todos[3]);

	});
});
