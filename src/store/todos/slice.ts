import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type Todo from "../../models/todo";

export type ITodoHash = { [todoId: Todo["_id"]]: Todo };

export interface TodosSliceState {
	// completedTotal: number;
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
			state.todos[_id].completed = true;
		},
		todoDeleted(state, { payload: _id }: PayloadAction<Todo["_id"]>) {
			delete state.todos[_id];
		},
		todosReplaced(state, { payload: newTodos }: PayloadAction<ITodoHash>) {
			state.todos = newTodos;
		},
		// CMT Partial here because we can selectively pick which prop to update
		todoUpdated(
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

export const todoSliceSelectors = {
	selectCompletedTotal : createSelector(
		[ (state: TodosSliceState) => state.todos ],
		todos => Object.values(todos).filter(t => t.completed).length
	)
};

export default todosSlice;
