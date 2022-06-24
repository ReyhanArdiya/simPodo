import React from "react";
import styled from "styled-components";
import Card from "../../Cards/Card";
import Content, { ContentProps } from "./Content";

const Container = styled(Card)<{ dark: boolean }>`
	${({ dark, theme }) => !dark && theme.effects.boxShadows[3]}
	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
	min-height: 27em;
	min-width: 37.5em;
	height: 27em;
	width: 37.5em;
	padding: 1.4em;
`;

interface BigCalendarProps {
	activeDayI: number;

	/**
	 * Pass in 42 entries to `dates` to fill the entire calendar.
	 */
	dates: ContentProps["dates"];
	dark?: boolean;
}

const BigCalendar = ({
	activeDayI = 0,
	dark = false,
	dates
}: BigCalendarProps) => {
	return (
		<Container dark={dark}>
			<Content
				activeDayI={activeDayI}
				dark={dark}
				dates={dates}
			/>
		</Container>
	);
};

export default React.memo(BigCalendar);
