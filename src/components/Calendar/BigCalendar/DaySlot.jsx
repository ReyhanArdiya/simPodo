import styled, { css } from "styled-components";

const transMs = "250ms";

const Container = styled.li`
    font: 700 1.6em/1.375em "Inter", sans-serif;
	letter-spacing: -0.02em;
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
	z-index: 2;
	transition: color ${transMs} ease-in-out;
    text-transform: capitalize;
    display: inline-block;

	${({ active, dark, theme }) => {
		if (active) {
			return css`
				color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[4] : theme.colors.light.UI[6]};
			`;
		}

		return css`
			color: ${dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[5]};
		`;
	}}
`;

const DaySlot = ({
	children: day,
	active = false,
	dark = false
}) => {
	return (
		<Container
			active={active}
			dark={dark}
		>
			{day.slice(0, 3)}
		</Container>
	);
};

export default DaySlot;
