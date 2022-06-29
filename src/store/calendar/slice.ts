import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalendarSliceState {
	selectedDate: {
		date: number;
		monthIndex: number;
	};
	viewDate: {
		daysInMonth: number;
		monthIndex: number;
		startingDayOfWeek: number;
	};
}

const calendarSlice = createSlice({
	initialState : {} as CalendarSliceState,
	name         : "calendar",
	reducers     : {
		dateSelected : (
			state,
			{ payload: newSelectedDate }: PayloadAction<number>
		) => {
			state.selectedDate.date = newSelectedDate;
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
export default calendarSlice;
