import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";
import { HYDRATE } from "next-redux-wrapper";
import type { RootState } from "..";
import NoTodoFoundError from "../../models/errors/no-todo-found-error";
import type Tag from "../../models/tag";
import type Todo from "../../models/todo";
import replaceO1Proxies from "../../utils/replaceO1-proxies";

export interface IStoreTodo extends Omit<Todo, "timeStart"> {
	timeStart: Dayjs;
}

// CMT I can't extend Todo since timeStart must be of different type and bcz off
// Liskov substituion sumn2 I can't just do that easily, so I need to make a new one.
export class StoreTodo implements IStoreTodo {
	constructor(
		public title: string,
		public details: string,
		public timeStart: Dayjs,
		public completed: boolean = false,
		public readonly tagId: Tag["_id"],
		public readonly _id: string = ""
	) {
		// Todo.call(this, title, details, timeStart, completed, tagId, _id);
		this.title = title;
		this.details = details;
		this.timeStart = timeStart;
		this.completed = completed;
		this.tagId = tagId;
		this._id = _id;
	}
}

export type ITodoHash = { [todoId: IStoreTodo["_id"]]: IStoreTodo | undefined };

export interface TodosSliceState {
	todos: ITodoHash;
}

const todosSlice = createSlice({
	extraReducers : {
		// TODO how to add action type here? Using PayloadAction leaeds to errors
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
		todoAdded(state, { payload: todo }: PayloadAction<IStoreTodo>) {
			state.todos[todo._id] = todo;
		},
		todoCompleted(
			state,
			{ payload: _id }: PayloadAction<IStoreTodo["_id"]>
		) {
			const toBeCompletedTodo = state.todos[_id];

			if (toBeCompletedTodo) {
				toBeCompletedTodo.completed = true;
			}
		},
		todoDeleted(state, { payload: _id }: PayloadAction<IStoreTodo["_id"]>) {
			delete state.todos[_id];
		},
		todosReplaced(state, { payload: newTodos }: PayloadAction<ITodoHash>) {
			state.todos = newTodos;
		},
		todoUpdated(
			state,
			{
				payload: newTodoData
			}: PayloadAction<
				Partial<Omit<IStoreTodo, "_id">> & Pick<IStoreTodo, "_id">
			> // CMT Partial here because we can selectively pick which prop to update
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
		[ (state: RootState) => state.todos.todos ],
		todos => Object.values(todos).filter(t => t!.completed).length
	),
	selectTodoById : createSelector(
		[ (state: RootState, id: IStoreTodo["_id"]) => state.todos.todos[id] ],
		todo => todo
	),
	filterByTagId : createSelector(
		[
			(state: RootState) => state.todos.todos,
			(_state: RootState, tagId: Tag["_id"]) => tagId
		],
		(todos, tagId) => Object.values(todos).filter(t => t!.tagId === tagId)
	),
	filterByTimeRange : createSelector(
		[
			(state: RootState) => state.todos.todos,
			(
				_state: RootState,
				filterRange: { start: Dayjs; end: Dayjs }
			) => filterRange
		],
		(todos, { start, end }) => Object.values(todos).filter(t => {
			const todoTime = t!.timeStart;

			return todoTime.diff(start) >= 0 && todoTime.diff(end) <= 0;
		})
	),
	filterTodaysTodos(state: RootState) {
		const today = dayjs().hour(0).minute(59).second(59);

		return this.filterByTimeRange(state, {
			start : today,
			end   : dayjs(today).hour(23).minute(59).second(59)
		});
	}
};

export default todosSlice;
