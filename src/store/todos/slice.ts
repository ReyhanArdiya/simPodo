import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type Todo from "../../models/todo";

export type ITodoHash = { [todoId: Todo["_id"]]: Todo };

export interface TodosSliceState {
	completedTotal: number;
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
		addTodo(state, { payload: todo }: PayloadAction<Todo>) {
			state.todos[todo._id] = todo;
		},
		completeTodo(state, { payload: _id }: PayloadAction<Todo["_id"]>) {
			if (!state.todos[_id].completed) {
				state.todos[_id].completed = true;
				state.completedTotal++;
			}
		},
		deleteTodo(state, { payload: _id }: PayloadAction<Todo["_id"]>) {
			delete state.todos[_id];
		},
		replaceTodos(state, { payload: newTodos }: PayloadAction<ITodoHash>) {
			state.todos = newTodos;
		},
		// CMT Partial here because we can selectively pick which prop to update
		updateTodo(
			state,
			{
				payload: newTodoData
			}: PayloadAction<Partial<Omit<Todo, "_id">> & Pick<Todo, "_id">>
		) {
			const { _id } = newTodoData;

			for (const key in newTodoData) {
				type K = Omit<Todo, "_id">;

				if (key !== "_id") {
					/*
					REFAC The problem here is ITodo key could be boolean | string
					and TS worries what happens if we set a string to a boolean
					and vice versa. How to tell TS that will never happen?
					*/
					// @ts-expect-error : see above REFAC
					state.todos[_id][key as keyof K] =
						newTodoData[key as keyof K]!;
				}
			}
		}
	}
});

export const {
	actions: todosSliceActions,
	name: todosSliceName,
	reducer: todoSliceReducer
} = todosSlice;

export default todosSlice;
