import calendarSlice from "./slice";

const { getInitialState, actions, reducer } = calendarSlice;

const deepClone = obj => JSON.parse(JSON.stringify(obj));

describe("Calendar slice", () => {
	const expectedState = {
		selectedDate : {
			date       : expect.any(Number),
			monthIndex : expect.any(Number),
		},
		viewDate : {
			daysInMonth       : expect.any(Number),
			monthIndex        : expect.any(Number),
			startingDayOfWeek : expect.any(Number),
		}
	};

	let initialState;
	beforeEach(() => {
		initialState = deepClone(getInitialState());
	});

	it("should contain these initialStates", () => {
		expect(initialState).toEqual(expectedState);
	});

	describe("reducers", () => {
		describe("selectedDate actions", () => {
			it("should set the date", () => {
				const newState = reducer(
					initialState,
					actions.selectDate(2)
				);

				expect(newState.selectedDate.date)
					.not.toEqual(initialState.selectedDate.date);
			});

			it("should set the monthIndex", () => {
				const newState = reducer(
					initialState,
					actions.selectMonth(2)
				);

				expect(newState.selectedDate.monthIndex)
					.not.toEqual(initialState.selectedDate.monthIndex);
			});
		});

		describe("viewDate actions", () => {
			it("should set the daysInMonth", () => {
				const newState = reducer(
					initialState,
					actions.setDaysInMonth(2)
				);

				expect(newState.viewDate.daysInMonth)
					.not.toEqual(initialState.viewDate.daysInMonth);
			});
			it("should set the monthIndex", () => {
				const newState = reducer(
					initialState,
					actions.setViewMonthIndex(2)
				);

				expect(newState.viewDate.monthIndex)
					.not.toEqual(initialState.viewDate.monthIndex);
			});
			it("should set the startingDayOfWeek", () => {
				const newState = reducer(
					initialState,
					actions.setViewStartingDayOfWeek(2)
				);

				expect(newState.viewDate.startingDayOfWeek)
					.not.toEqual(initialState.viewDate.startingDayOfWeek);
			});
		});
	});
});