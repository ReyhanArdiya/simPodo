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

export interface ContentProps {
	activeDayI: number;

	/**
	 * Pass in 42 entries to `dates` to fill the entire calendar.
	 */
	dates: {
		active: boolean;
		date: number;
		onClick: (dayI?: number, date?: number) => void;
		outside: boolean;
	}[];
	dark?: boolean;
}

const Content = ({ activeDayI = 0, dark = false, dates }: ContentProps) => {
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
				{...dates[i]}
				dark={dark}
				key={i}
				onClick={dates[i]?.onClick.bind(null, i % 7, dates[i].date)}
			>
				{dates[i]?.date}
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
