import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import NoTodoFoundError from "../../models/errors/no-todo-found-error";
import type Todo from "../../models/todo";
import replaceO1Proxies from "../../utils/replaceO1-proxies";

export type ITodoHash = { [todoId: Todo["_id"]]: Todo | undefined };

export interface TodosSliceState {
	todos: ITodoHash;
}

const todosSlice = createSlice({
	extraReducers : {
		[HYDRATE] : (state, action) => {
			return {
				...state,
				todos : {
					...state.todos,
					...action.payload.todos.todos
				}
			};
		}
	},
	initialState : {} as TodosSliceState,
	name         : "todos",
	reducers     : {
		todoAdded(state, { payload: todo }: PayloadAction<Todo>) {
			state.todos[todo._id] = todo;
		},
		todoCompleted(state, { payload: _id }: PayloadAction<Todo["_id"]>) {
			const toBeCompletedTodo = state.todos[_id];

			if (toBeCompletedTodo) {
				toBeCompletedTodo.completed = true;
			}
		},
		todoDeleted(state, { payload: _id }: PayloadAction<Todo["_id"]>) {
			delete state.todos[_id];
		},
		todosReplaced(state, { payload: newTodos }: PayloadAction<ITodoHash>) {
			state.todos = newTodos;
		},
		todoUpdated(
			state,
			{
				payload: newTodoData
			}: PayloadAction<Partial<Omit<Todo, "_id">> & Pick<Todo, "_id">> // CMT Partial here because we can selectively pick which prop to update
		) {
			const { _id } = newTodoData;

			const toBeUpdatedTodo = state.todos[_id];
			if (!toBeUpdatedTodo) {
				throw new NoTodoFoundError();
			}

			replaceO1Proxies(toBeUpdatedTodo, newTodoData);
		}
	}
});

export const {
	actions: todosSliceActions,
	name: todosSliceName,
	reducer: todoSliceReducer
} = todosSlice;

export const todoSliceSelectors = {
	selectCompletedTotal : createSelector(
		[ (state: TodosSliceState) => state.todos ],
		todos => Object.values(todos).filter(t => t!.completed).length
	),
	selectTodoById : createSelector(
		[ (state: TodosSliceState, id: Todo["_id"]) => state.todos[id] ],
		todo => todo
	)
};

export default todosSlice;
