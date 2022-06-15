import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const todosSlice = createSlice({
	extraReducers : {
		[HYDRATE] : (state, action) => {
			return {
				...state,
				todos : {
					...state.todos,
					...action.payload.todos.todos
				},
			};
		}
	},
	initialState : { todos : {} },
	name         : "todos",
	reducers     : {
		addTodo : (state, { payload: todo }) => {
			state.todos[todo.id] = todo;
		},
		deleteTodo : (state, { payload: id }) => {
			delete state.todos[id];
		},
		replaceTodos : (state, { payload: newTodos }) => {
			state.todos = newTodos;
		},
	},
});

export const { actions: todosSliceActions, name: todosSliceName } = todosSlice;
export default todosSlice;
