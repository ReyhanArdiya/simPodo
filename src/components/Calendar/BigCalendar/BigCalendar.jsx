import styled from "styled-components";
import Card from "../../Cards/Card";
import Content from "./Content";
import React from "react";

const Container = styled(Card)`
	${({ dark, theme }) => !dark && theme.effects.boxShadows[3]}
	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
	min-height: 27em;
	min-width: 37.5em;
	height: 27em;
	width: 37.5em;
	padding: 1.4em;
`;

/**
 * Pass in 42 entries to `dates` to fill the entire calendar.
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
const BigCalendar = ({
	activeDayI = 0,
	dark = false,
	dates
}) => {
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
