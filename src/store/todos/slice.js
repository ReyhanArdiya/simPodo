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
	initialState : {
		completedTotal : 0,
		todos          : {
			todoId : {
				completed : false,
				id        : "todoId",
				title     : "todoTitle"
			}
		},
	},
	name     : "todos",
	reducers : {
		addTodo(state, { payload: todo }) {
			state.todos[todo.id] = todo;
		},
		completeTodo(state, { payload: id }) {
			if (!state.todos[id].completed) {
				state.todos[id].completed = true;
				state.completedTotal++;
			}
		},
		deleteTodo(state, { payload: id }) {
			delete state.todos[id];
		},
		replaceTodos(state, { payload: newTodos }) {
			state.todos = newTodos;
		},
		updateTodo(state, { payload: { title, completed, id } }) {
			state.todos[id].title = title;
			state.todos[id].completed = completed;
		}
	},
});

export const {
	actions: todosSliceActions,
	name: todosSliceName,
	reducer: todoSliceReducer
} = todosSlice;

export default todosSlice;
