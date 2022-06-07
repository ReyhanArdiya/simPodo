import styled, { css } from "styled-components";

const transMs = "250ms";

const Container = styled.p`
    font: 700 1.6em/1.375em "Inter", sans-serif;
	letter-spacing: -0.02em;
	text-align: center;
	position: relative;
	align-items: center;
	display: flex;
	justify-content: center;
	z-index: 2;
	transition: color ${transMs} ease-in-out;
	cursor: pointer;
    display: inline-block;

    ::before {
		content: "";
		position: absolute;
		background: ${({ dark, theme }) => dark ? theme.colors.dark.UI[4] : theme.colors.light.UI[6]};
		border-radius: 50%;
		height: 2.5em;
		width: 2.5em;
		z-index: -1;
		transition: transform ${transMs} cubic-bezier(0.39, -0.56, 0.55, 1.6);
	}

	${({ active, outside, dark, theme }) => {
		if (active) {
			return css`
				color: ${dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
			`;
		}

		if (outside) {
			return css`
				color: ${dark ? theme.colors.dark.UI[7] : theme.colors.light.UI[4]};
			`;
		}

		return css`
			color: ${dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]};
		`;
	}}

	${({ active, dark, theme }) => {
		if (!active) {
			return css`
				::before {
					transform-origin: center;
					transform: scale(0);
				}

                :hover::before {
		            transform: scale(1);
	            }

				:hover {
					color: ${dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
				}
			`;
		}
	}}
`;

const DateSlot = ({
	children: date,
	onClick,
	active = false,
	outside = false,
	dark = false
}) => {
	return (
		<Container
			active={active}
			dark={dark}
			onClick={onClick}
			outside={outside}
		>
			{date < 10 ? `0${date}` : date}
		</Container>
	);
};

export default DateSlot;
