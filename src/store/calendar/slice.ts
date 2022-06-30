import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

		// TODO all of these reducers can be combined into dateSelected i think?
		monthSelected(
			state,
			{ payload: newSelectedMonth }: PayloadAction<number>
		) {
			state.selectedDate.monthIndex = newSelectedMonth;
		},
		setDaysInMonth(
			state,
			{ payload: newDaysInMonth }: PayloadAction<number>
		) {
			state.viewDate.daysInMonth = newDaysInMonth;
		},
		setViewMonthIndex(
			state,
			{ payload: newMonthIndex }: PayloadAction<number>
		) {
			state.viewDate.monthIndex = newMonthIndex;
		},
		setViewStartingDayOfWeek(
			state,
			{ payload: newStartingDayOfWeek }: PayloadAction<number>
		) {
			state.viewDate.startingDayOfWeek = newStartingDayOfWeek;
		}
	}
});

export const { actions: calendarSliceActions, name: calendarSliceName } =
	calendarSlice;

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
		[
			(state: CalendarSliceState) => state.selectedDate.date,
			(state: CalendarSliceState) => state.selectedDate.monthIndex,
			(state: CalendarSliceState) => state.selectedDate.year,
		],
		(date, monthI, year) => dayjs.tz(`${year}-${monthI + 1}-${date}`).toString()
	)

};

export default calendarSlice;
