import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import type { RootState } from "..";
import replaceO1Proxies from "../../utils/replaceO1-proxies";

export interface CalendarSliceState {
	selectedDate: {
		date: number;
		monthIndex: number;
		year: number;
	};
	viewedDate: {
		date: number;
		monthIndex: number;
		year: number;
	};
}

type DateSelectedPayload = PayloadAction<Partial<CalendarSliceState["selectedDate"]>>;
type DateViewedPayload = PayloadAction<Partial<CalendarSliceState["viewedDate"]>>;

const calendarSlice = createSlice({
	initialState : {} as CalendarSliceState,
	name         : "calendar",
	reducers     : {
		dateSelected : (
			state,
			{ payload: newSelectedDate }: DateSelectedPayload
		) => {
			replaceO1Proxies(state.selectedDate, newSelectedDate);
		},
		dateViewed : (
			state,
			{ payload: newViewedDate }: DateViewedPayload
		) => {
			replaceO1Proxies(state.viewedDate, newViewedDate);
		},
	}
});

export const { actions: calendarSliceActions, name: calendarSliceName } =
	calendarSlice;

const extractCalendarDates = (k: keyof CalendarSliceState) => [
	(state: RootState) => state.calendar[k].date,
	(state: RootState) => state.calendar[k].monthIndex,
	(state: RootState) => state.calendar[k].year,
];

const selectedDateExtractor = extractCalendarDates("selectedDate");
const viewedDateExtractor = extractCalendarDates("viewedDate");

export const calendarSliceSelectors = {
	selectSelectedDateDate : createSelector(
		[ (state: RootState) => state.calendar.selectedDate.date ],
		selectedDateDate => selectedDateDate
	),
	selectSelectedDateMonthIndex : createSelector(
		[ (state: RootState) => state.calendar.selectedDate.monthIndex ],
		selectedDateMonthIndex => selectedDateMonthIndex
	),
	selectSelectedDateYear : createSelector(
		[ (state: RootState) => state.calendar.selectedDate.year ],
		selectedDateYear => selectedDateYear
	),
	selectSelectedDateFullDate : createSelector(
		selectedDateExtractor,
		(date, monthI, year) => dayjs.tz(`${year}-${monthI + 1}-${date}`).toString()
	),

	selectViewedDateDate : createSelector(
		[ (state: RootState) => state.calendar.viewedDate.date ],
		viewedDateDate => viewedDateDate
	),
	selectViewedDateMonthIndex : createSelector(
		[ (state: RootState) => state.calendar.viewedDate.monthIndex ],
		viewedDateMonthIndex => viewedDateMonthIndex
	),
	selectViewedDateYear : createSelector(
		[ (state: RootState) => state.calendar.viewedDate.year ],
		viewedDateYear => viewedDateYear
	),
	selectViewedDateFullDate : createSelector(
		viewedDateExtractor,
		(date, monthI, year) => dayjs.tz(`${year}-${monthI + 1}-${date}`).toString()
	),
	selectViewedDateDaysInMonth : createSelector(
		viewedDateExtractor,
		(date, monthI, year) => dayjs().year(year).month(monthI).date(date).daysInMonth()
	),
	selectViewedDatefirstDayOfMonthIndex : createSelector(
		viewedDateExtractor,
		(_date, monthI, year) => dayjs().year(year).month(monthI).date(1).day()
	),
};

export default calendarSlice;
