import dayjs from "dayjs";
import mockRootState from "../../utils/tests/mock-rootstate";
import { calendarSliceSelectors, type CalendarSliceState } from "./slice";

const initialState = mockRootState;
beforeEach(() => {
	initialState.calendar = {
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

describe("Calendar slice selected date field selectors", () => {
	it("selects the date", () => {
		expect(calendarSliceSelectors.selectSelectedDateDate(initialState)).toBe(
			initialState.calendar.selectedDate.date
		);
	});
	it("selects the month index", () => {
		expect(calendarSliceSelectors.selectSelectedDateMonthIndex(initialState)).toBe(
			initialState.calendar.selectedDate.monthIndex
		);
	});
	it("selects the year", () => {
		expect(calendarSliceSelectors.selectSelectedDateYear(initialState)).toBe(
			initialState.calendar.selectedDate.year
		);
	});
	it("derives the full date string in local format", () => {
		const selectedDate: CalendarSliceState["selectedDate"] = {
			date       : dayjs(new Date()).date(),
			monthIndex : dayjs(new Date()).month(),
			year       : dayjs(new Date()).year()
		};

		const { date, monthIndex, year } = selectedDate;

		const fullDate = dayjs.tz(`${year}-${monthIndex + 1}-${date}`).toString();

		initialState.calendar.selectedDate = selectedDate;

		expect(
			calendarSliceSelectors.selectSelectedDateFullDate(initialState)
		).toBe(fullDate);
	});
});

describe("Calendar slice viewed date field selectors", () => {
	it("selects the date", () => {
		expect(calendarSliceSelectors.selectViewedDateDate(initialState)).toBe(
			initialState.calendar.viewedDate.date
		);
	});
	it("selects the month index", () => {
		expect(calendarSliceSelectors.selectViewedDateMonthIndex(initialState)).toBe(
			initialState.calendar.viewedDate.monthIndex
		);
	});
	it("selects the year", () => {
		expect(calendarSliceSelectors.selectViewedDateYear(initialState)).toBe(
			initialState.calendar.viewedDate.year
		);
	});
	it("derives the full date string in local format", () => {
		const viewedDate: CalendarSliceState["viewedDate"] = {
			date       : dayjs(new Date()).date(),
			monthIndex : dayjs(new Date()).month(),
			year       : dayjs(new Date()).year()
		};

		const { date, monthIndex, year } = viewedDate;

		const fullDate = dayjs.tz(`${year}-${monthIndex + 1}-${date}`).toString();

		initialState.calendar.viewedDate = viewedDate;

		expect(
			calendarSliceSelectors.selectViewedDateFullDate(initialState)
		).toBe(fullDate);
	});
	it("derives daysInMonth", () => {
		for (let i = 0; i < 12; i++) {
			const initialState = { ...mockRootState };

			const viewedDate: CalendarSliceState["viewedDate"] = {
				date       : 1,
				monthIndex : i,
				year       : 2022
			};

			initialState.calendar.viewedDate = viewedDate;

			expect(calendarSliceSelectors.selectViewedDateDaysInMonth(
				initialState
			)).toBe(
				dayjs()
					.date(initialState.calendar.viewedDate.date)
					.month(initialState.calendar.viewedDate.monthIndex)
					.year(initialState.calendar.viewedDate.year)
					.daysInMonth()
			);
		}
	});
	it("derives firstDayOfMonthIndex", () => {
		for (let i = 0; i < 12; i++) {
			const initialState = { ...mockRootState };

			const viewedDate: CalendarSliceState["viewedDate"] = {
				date       : 25,
				monthIndex : i,
				year       : 2022
			};

			initialState.calendar.viewedDate = viewedDate;

			expect(
				calendarSliceSelectors.selectViewedDatefirstDayOfMonthIndex(initialState)
			).toBe(
				dayjs()
					.date(1)
					.month(viewedDate.monthIndex)
					.year(viewedDate.year)
					.day()
			);
		}
	});
});
