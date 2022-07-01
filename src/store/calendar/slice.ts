import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
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
	(state: CalendarSliceState) => state[k].date,
	(state: CalendarSliceState) => state[k].monthIndex,
	(state: CalendarSliceState) => state[k].year,
];

const selectedDateExtractor = extractCalendarDates("selectedDate");
const viewedDateExtractor = extractCalendarDates("viewedDate");

export const calendarSliceSelectors = {
	selectSelectedDateDate : createSelector(
		[ (state: CalendarSliceState) => state.selectedDate.date ],
		selectedDateDate => selectedDateDate
	),
	selectSelectedDateMonthIndex : createSelector(
		[ (state: CalendarSliceState) => state.selectedDate.monthIndex ],
		selectedDateMonthIndex => selectedDateMonthIndex
	),
	selectSelectedDateYear : createSelector(
		[ (state: CalendarSliceState) => state.selectedDate.year ],
		selectedDateYear => selectedDateYear
	),
	selectSelectedDateFullDate : createSelector(
		selectedDateExtractor,
		(date, monthI, year) => dayjs.tz(`${year}-${monthI + 1}-${date}`).toString()
	),

	selectViewedDateDate : createSelector(
		[ (state: CalendarSliceState) => state.viewedDate.date ],
		viewedDateDate => viewedDateDate
	),
	selectViewedDateMonthIndex : createSelector(
		[ (state: CalendarSliceState) => state.viewedDate.monthIndex ],
		viewedDateMonthIndex => viewedDateMonthIndex
	),
	selectViewedDateYear : createSelector(
		[ (state: CalendarSliceState) => state.viewedDate.year ],
		viewedDateYear => viewedDateYear
	),
	selectViewedDateFullDate : createSelector(
		viewedDateExtractor,
		(date, monthI, year) => dayjs.tz(`${year}-${monthI + 1}-${date}`).toString()
	),
	selectViewedDateDaysInMonth : createSelector(
		viewedDateExtractor,
		(date, monthI, year) => dayjs.tz(`${year}-${monthI + 1}-${date}`).daysInMonth()
	),
	selectViewedDatefirstDayOfMonthIndex : createSelector(
		viewedDateExtractor,
		(_date, monthI, year) => dayjs.tz(`${year}-${monthI + 1}-1`).day()
	),
};

export default calendarSlice;
