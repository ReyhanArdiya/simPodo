import styled from "styled-components";
import Arrow from "../Shapes/Arrow";

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

const Month = styled.p`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]};
	font: 900 4em/1.15em "Nunito", sans-serif;
	text-align: center;
	text-transform: capitalize;
`;

const Year = styled(Month)`
	font-size: 1.5em;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[5]};
    letter-spacing: -0.02em;
`;

const Time = ({ month, year, onPrevClick, onNextClick, dark = false }) => {
	return (
		<Container dark={dark}>
			<Arrow
				angle="left"
				dark={dark}
				onClick={onPrevClick}
			/>
			<Date>
				<Month>{month.slice(0, 3)}</Month>
				<Year>{year}</Year>
			</Date>
			<Arrow
				angle="right"
				dark={dark}
				onClick={onNextClick}
			/>
		</Container>
	);
};

export default Time;
