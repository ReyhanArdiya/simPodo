import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
	initialState : {
		selectedDate : {
			date       : 0,
			monthIndex : 0,
		},
		viewDate : {
			daysInMonth       : 31,
			monthIndex        : 0,
			startingDayOfWeek : 0,
		}
	},
	name     : "calendar",
	reducers : {
		selectDate : (state, { payload: newSelectedDate }) => {
			state.selectedDate.date = newSelectedDate;
		},
		selectMonth : (state, { payload: newSelectedMonth }) => {
			state.selectedDate.monthIndex = newSelectedMonth;
		},
		setDaysInMonth : (state, { payload: newDaysInMonth }) => {
			state.viewDate.daysInMonth = newDaysInMonth;
		},
		setViewMonthIndex : (state, { payload: newMonthIndex }) => {
			state.viewDate.monthIndex = newMonthIndex;
		},
		setViewStartingDayOfWeek : (
			state,
			{ payload: newStartingDayOfWeek }
		) => {
			state.viewDate.startingDayOfWeek = newStartingDayOfWeek;
		},
	}
});

export const {
	actions: calendarSliceActions,
	name: calendarSliceName
} = calendarSlice;
export default calendarSlice;
