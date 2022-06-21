import styled from "styled-components";
import BouncyMove from "../Animations/BouncyMove";
import ArrowLeft from "../Shapes/Arrows/ArrowLeft";
import ArrowRight from "../Shapes/Arrows/ArrowRight";
import React, { MouseEventHandler } from "react";

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	column-gap: 4.5em;
	width: max-content;
`;

const Date = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Month = styled.p<{ dark?: boolean }>`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]};
	font: 900 4em/1.15em "Nunito", sans-serif;
	text-align: center;
	text-transform: capitalize;
`;

const Year = styled(Month)<{ dark?: boolean }>`
	font-size: 1.5em;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[5]};
	letter-spacing: -0.02em;
`;

interface TimeProps {
	month: string;
	year: number;
	onPrevClick: MouseEventHandler;
	onNextClick: MouseEventHandler;
	dark?: boolean;
}

const Time = ({
	month,
	year,
	onPrevClick,
	onNextClick,
	dark = false
}: TimeProps) => {
	return (
		<Container>
			<BouncyMove onClick={onPrevClick}>
				<ArrowLeft dark={dark} />
			</BouncyMove>
			<Date>
				<Month>{month.slice(0, 3)}</Month>
				<Year>{year}</Year>
			</Date>
			<BouncyMove
				direction="right"
				onClick={onNextClick}
			>
				<ArrowRight dark={dark} />
			</BouncyMove>
		</Container>
	);
};

export default React.memo(Time);
