import dayjs from "dayjs";
import ClientTodo from "../../models/client/todo";
import NoTodoFoundError from "../../models/errors/no-todo-found-error";
import todosSlice, {
	ITodoHash,
	todoSliceReducer, todosSliceActions,
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
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
			}
		}
	};
});

describe("todoSlice actions", () => {
	it("adds a todo", () => {
		const newTodo = new ClientTodo("todo2", "details", dayjs(), false, "tagId", "todoId2");

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
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
			},
			todoId2 : {
				completed : false,
				_id       : "todoId2",
				title     : "todo2",
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
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
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
			},
			2 : {
				completed : false,
				_id       : "2",
				title     : "todo2",
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
			},
			3 : {
				completed : false,
				_id       : "3",
				title     : "todo3",
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
			},
			4 : {
				completed : false,
				_id       : "4",
				title     : "todo4",
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
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
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs()
			}
		};

		const newTodoData = new ClientTodo("todo1 updated", "details", dayjs(), true, "tagId", todoId);

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


