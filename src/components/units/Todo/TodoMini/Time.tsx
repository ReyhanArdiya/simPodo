import styled from "styled-components";
import type { TimeProps } from "./interfaces/time-props.interface";

const Container = styled.p<{dark?: boolean}>`
	font: 900 1.2em "Nunito", sans-serif;
	text-align: right;
	letter-spacing: 0.03em;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[5]};
`;

const Unit = styled.span<Pick<TimeProps, "edit">>`
	text-transform: uppercase;
	${({ edit }) => edit && "cursor: pointer;"}
`;


const Time = ({
	amPm,
	dark,
	edit,
	hours,
	minutes,
	onAmPmClick,
	onHourClick,
	onMinuteClick
}: TimeProps) => {
	const hoursStr = hours < 10 ? `0${hours}` : hours;
	const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

	return (
		<Container dark={dark}>
			<Unit
				edit={edit}
				onClick={onHourClick}
			>
				{hoursStr}
			</Unit>
			:
			<Unit
				edit={edit}
				onClick={onMinuteClick}
			>
				{minutesStr}
			</Unit>{" "}
			<Unit
				edit={edit}
				onClick={onAmPmClick}
			>
				{amPm}
			</Unit>
		</Container>
	);
};

export default Time;
