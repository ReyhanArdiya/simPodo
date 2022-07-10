import calendarSlice, {
	CalendarSliceState
} from "./slice";

const { actions, reducer } = calendarSlice;

let initialState: CalendarSliceState;

beforeEach(() => {
	initialState = {
		selectedDate : {
			date       : 1,
			monthIndex : 0,
			year       : 2022
		},
		viewedDate : {
			date       : 1,
			monthIndex : 0,
			year       : 2022
		}
	};
});

describe("Calendar slice selected date field actions", () => {
	it("updates the selected date", () => {
		const newDate = 2;

		const newState = reducer(
			initialState,
			actions.dateSelected({
				date : newDate
			})
		);

		expect(newState.selectedDate.date).toBe(newDate);
	});

	it("updates the selected month index", () => {
		const newMonthIndex = 2;

		const newState = reducer(
			initialState,
			actions.dateSelected({
				monthIndex : newMonthIndex
			})
		);

		expect(newState.selectedDate.monthIndex).toBe(newMonthIndex);
	});

	it("updates the selected year", () => {
		const newYear = 2023;

		const newState = reducer(
			initialState,
			actions.dateSelected({
				year : newYear
			})
		);

		expect(newState.selectedDate.year).toBe(newYear);
	});
});

describe("Calendar slice viewed date field actions", () => {
	it("updates the viewed date", () => {
		const newDate = 2;

		const newState = reducer(
			initialState,
			actions.dateViewed({
				date : newDate
			})
		);

		expect(newState.viewedDate.date).toBe(newDate);
	});
	it("updates the viewed month index", () => {
		const newMonthIndex = 2;

		const newState = reducer(
			initialState,
			actions.dateViewed({
				monthIndex : newMonthIndex
			})
		);

		expect(newState.viewedDate.monthIndex).toBe(newMonthIndex);
	});
	it("updates the viewed year", () => {
		const newYear = 2023;

		const newState = reducer(
			initialState,
			actions.dateViewed({
				year : newYear
			})
		);

		expect(newState.viewedDate.year).toBe(newYear);
	});
});
