import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
	initialState : {
		selectedDate : {
			date       : 0,
			monthIndex : 0
		},
		viewDate : {
			daysInMonth       : 31,
			monthIndex        : 0,
			startingDayOfWeek : 0
		}
	},
	name     : "calendar",
	reducers : {
		selectDate : (
			state,
			{ payload: newSelectedDate }: { payload: number }
		) => {
			state.selectedDate.date = newSelectedDate;
		},
		selectMonth(state, { payload: newSelectedMonth }: { payload: number }) {
			state.selectedDate.monthIndex = newSelectedMonth;
		},
		setDaysInMonth(
			state,
			{ payload: newDaysInMonth }: { payload: number }
		) {
			state.viewDate.daysInMonth = newDaysInMonth;
		},
		setViewMonthIndex(
			state,
			{ payload: newMonthIndex }: { payload: number }
		) {
			state.viewDate.monthIndex = newMonthIndex;
		},
		setViewStartingDayOfWeek(
			state,
			{ payload: newStartingDayOfWeek }: { payload: number }
		) {
			state.viewDate.startingDayOfWeek = newStartingDayOfWeek;
		}
	}
});

export const { actions: calendarSliceActions, name: calendarSliceName } =
	calendarSlice;
export default calendarSlice;
