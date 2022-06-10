import styled from "styled-components";

const Container = styled.p`
	font: 900 1.2em "Nunito", sans-serif;
	text-align: right;
	letter-spacing: 0.03em;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[5]};
`;

const Unit = styled.span`
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
}) => {
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;

	return (
		<Container dark={dark}>
			<Unit
				edit={edit}
				onClick={onHourClick}
			>
				{hours}
			</Unit>
			:
			<Unit
				edit={edit}
				onClick={onMinuteClick}
			>
				{minutes}
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
