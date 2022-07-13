import dayjs from "dayjs";
import mockRootState from "../../utils/tests/mock-rootstate";
import { todoSliceSelectors } from "./slice";

const initialState = mockRootState;
beforeEach(() => {
	initialState.todos = {
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

describe("todoSlice selectors", () => {
	it("derives total of completed todos", () => {
		initialState.todos = {
			todos : {
				1 : {
					_id       : "1",
					title     : "1",
					completed : false,
					tagId     : "tagId",
					details   : "details",
					timeStart : dayjs()
				},
				2 : {
					_id       : "2",
					title     : "2",
					completed : false,
					tagId     : "tagId",
					details   : "details",
					timeStart : dayjs()
				},
				3 : {
					_id       : "3",
					title     : "3",
					completed : true,
					tagId     : "tagId",
					details   : "details",
					timeStart : dayjs()
				},
				4 : {
					_id       : "4",
					title     : "4",
					completed : true,
					tagId     : "tagId",
					details   : "details",
					timeStart : dayjs()
				},
				5 : {
					_id       : "5",
					title     : "5",
					completed : false,
					tagId     : "tagId",
					details   : "details",
					timeStart : dayjs()
				}
			}
		};

		expect(todoSliceSelectors.selectCompletedTotal(initialState)).toBe(2);
	});

	it("selects a todo by id", () => {
		const availableTodoId = "1";

		initialState.todos = {
			todos : {
				[availableTodoId] : {
					_id       : "1",
					title     : "1",
					completed : false,
					tagId     : "tagId",
					details   : "details",
					timeStart : dayjs()
				}
			}
		};

		expect(
			todoSliceSelectors.selectTodoById(initialState, availableTodoId)
		).toEqual(initialState.todos.todos[availableTodoId]);

		expect(
			todoSliceSelectors.selectTodoById(initialState, "notAvailable")
		).toBeUndefined();
	});

	it("filters todos by tagId", () => {
		const filterTagId = "selecThis";

		initialState.todos.todos = {
			1 : {
				completed : false,
				_id       : "1",
				title     : "todo1",
				tagId     : filterTagId,
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
				tagId     : filterTagId,
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

		const filteredTodos = todoSliceSelectors.filterByTagId(
			initialState,
			filterTagId
		);

		expect(filteredTodos).toHaveLength(2);
		expect(filteredTodos[0]).toEqual(initialState.todos.todos[1]);
		expect(filteredTodos[1]).toEqual(initialState.todos.todos[3]);

	});

	it("filters todos by time range", () => {
		const filterRange = {
			start : dayjs().date(1).month(1).year(2022),
			end   : dayjs().date(1).month(2).year(2022)
		};

		const timeStart = dayjs().date(15).month(1).year(2022);

		initialState.todos.todos = {
			1 : {
				completed : false,
				_id       : "1",
				title     : "todo1",
				tagId     : "1",
				details   : "details",
				timeStart
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
				tagId     : "3",
				details   : "details",
				timeStart
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

		const filteredTodos = todoSliceSelectors.filterByTimeRange(
			initialState,
			filterRange
		);

		expect(filteredTodos).toHaveLength(2);
		expect(filteredTodos[0]).toEqual(initialState.todos.todos[1]);
		expect(filteredTodos[1]).toEqual(initialState.todos.todos[3]);
	});

	it("filters today's todos", () => {
		initialState.todos.todos = {
			1 : {
				completed : false,
				_id       : "1",
				title     : "todo1",
				tagId     : "1",
				details   : "details",
				timeStart : dayjs().hour(17)
			},
			2 : {
				completed : false,
				_id       : "2",
				title     : "todo2",
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs().day(dayjs().day() + 1)
			},
			3 : {
				completed : false,
				_id       : "3",
				title     : "todo3",
				tagId     : "3",
				details   : "details",
				timeStart : dayjs().hour(7).minute(37)
			},
			4 : {
				completed : false,
				_id       : "4",
				title     : "todo4",
				tagId     : "tagId",
				details   : "details",
				timeStart : dayjs().day(dayjs().day() + 1)
			}
		};

		const todaysTodos = todoSliceSelectors.filterTodaysTodos(initialState);
		expect(todaysTodos).toHaveLength(2);
		expect(todaysTodos[0]).toEqual(initialState.todos.todos[1]);
		expect(todaysTodos[1]).toEqual(initialState.todos.todos[3]);
	});
});
