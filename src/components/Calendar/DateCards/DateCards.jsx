import { v4 as uuidv4 } from "uuid";
import DateCard from "./DateCard";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2.1em;
    max-width: 100%;
    overflow-x: auto;
    height: 17em;
    margin: -4.25em 0;
	padding: 0 1.85em;

    ::-webkit-scrollbar {
        display: none;
    }
`;

// CMT this is a dumb component, changing the active is the parent's job
const DateCards = ({
	dates = [
		{
			active  : false,
			dark    : false,
			date    : 1,
			day     : "monday",
			onClick : (day = "monday", date = 0) => console.log(day, date)
		}
	]
}) => {
	const dateCards = dates.map(({ active, day, date, onClick, dark }) => {
		return (
			<DateCard
				active={active}
				dark={dark}
				date={date}
				day={day}
				key={uuidv4()}
				onClick={onClick.bind(null, day, date)}
			/>
		);
	});

	return <Container>{dateCards}</Container>;
};

export default React.memo(DateCards);
