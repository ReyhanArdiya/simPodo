import styled from "styled-components";
import DateSlot from "./DateSlot";
import DaySlot from "./DaySlot";

const Container = styled.ul`
	height: 100%;
	width: 100%;
	border-radius: inherit;

	display: grid;
	/* CMT 7x7 = 49 slots */
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(7, 1fr);
	justify-content: center;
	align-items: center;
`;

const days = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday"
];

/**
 *
 * @param {{
 * activeDayI: number,
 * dates: {
 *  active  : false,
 *  dark    : false,
 *  date    : 1,
 *  onClick : (dayI = 0, date = 0) => void,
 *  outside : false
 *}[],
 * dark?: boolean
 *
 * }} props
 */
const Content = ({ activeDayI = 0, dark = false, dates }) => {
	const daySlots = days.map((day, i) => {
		return (
			<DaySlot
				active={i === activeDayI}
				dark={dark}
				key={i}
			>
				{day}
			</DaySlot>
		);
	});

	const dateSlots = [];
	for (let i = 0; i < 42; i++) {
		dateSlots.push(
			<DateSlot
				dark={dark}
				key={i}
				{...dates[0]}
				onClick={dates[0]?.onClick.bind(null, i % 7, dates[0].date)}
			>
				{dates[0]?.date}
			</DateSlot>
		);
	}

	return (
		<Container>
			{daySlots}
			{dateSlots}
		</Container>
	);
};

export default Content;
