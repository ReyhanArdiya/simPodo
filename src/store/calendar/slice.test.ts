import dayjs from "dayjs";
import calendarSlice, {
	calendarSliceSelectors,
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

describe("Calendar slice selected date field", () => {
	describe("actions", () => {
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

	describe("selectors", () => {
		it("selects the date", () => {
			expect(
				calendarSliceSelectors.selectSelectedDateDate(initialState)
			).toBe(initialState.selectedDate.date);
		});
		it("selects the month index", () => {
			expect(
				calendarSliceSelectors.selectSelectedDateMonthIndex(
					initialState
				)
			).toBe(initialState.selectedDate.monthIndex);
		});
		it("selects the year", () => {
			expect(
				calendarSliceSelectors.selectSelectedDateYear(initialState)
			).toBe(initialState.selectedDate.year);
		});
		it("selects the full date string in local format", () => {
			const selectedDate: CalendarSliceState["selectedDate"] = {
				date       : dayjs(new Date()).date(),
				monthIndex : dayjs(new Date()).month(),
				year       : dayjs(new Date()).year()
			};

			const { date, monthIndex, year } = selectedDate;

			const fullDate = dayjs.tz(`${year}-${monthIndex + 1}-${date}`).toString();

			expect(
				calendarSliceSelectors.selectSelectedDateFullDate({
					...initialState,
					selectedDate
				})
			).toBe(fullDate);
		});
	});
});

describe("Calendar slice viewed date field", () => {
	describe("actions", () => {
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

	describe("selectors", () => {
		it("selects the date", () => {
			expect(
				calendarSliceSelectors.selectViewedDateDate(initialState)
			).toBe(initialState.viewedDate.date);
		});
		it("selects the month index", () => {
			expect(
				calendarSliceSelectors.selectViewedDateMonthIndex(initialState)
			).toBe(initialState.viewedDate.monthIndex);
		});
		it("selects the year", () => {
			expect(
				calendarSliceSelectors.selectViewedDateYear(initialState)
			).toBe(initialState.viewedDate.year);
		});
		it("selects the full date in ISO 8601", () => {
			expect(
				calendarSliceSelectors.selectViewedDateFullDate(initialState)
			).toBe(initialState.viewedDate.year);
		});
		it("derives daysInMonth", () => {
			expect(
				calendarSliceSelectors.selectViewedDateDaysInMonth(initialState)
			).toBe(
				dayjs(
					`${initialState.viewedDate.year}-${
						initialState.viewedDate.monthIndex + 1
					}-${initialState.viewedDate.date}`
				).daysInMonth() // 31
			);
		});
		it("derives firstDayOfMonthIndex", () => {
			const initialState = {
				viewedDate : {
					date       : 25,
					monthIndex : 0,
					year       : 2022
				}
			};

			expect(
				calendarSliceSelectors.selectViewedDatefirstDayOfMonthIndex(
					initialState
				)
			).toBe(
				dayjs(
					`${initialState.viewedDate.year}-${
						initialState.viewedDate.monthIndex + 1
					}-1`
				).day() // 6 => saturday
			);
		});
	});
});
