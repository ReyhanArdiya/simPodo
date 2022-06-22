import type { MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import BouncyThrob from "../../Animations/BouncyThrob";
import Card from "../../Cards/Card";

const Container = styled(Card)<{ active?: boolean; dark?: boolean }>`
	display: flex;
	flex-direction: column;
	position: relative;

	${({ dark, theme }) => !dark && theme.effects.boxShadows[1]}

	padding: 1em;
	gap: 1.2em;
	min-width: 5.5em;
	height: 7.5em;

	${({ active }) => {
		if (active) {
			return css`
				background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]};
				color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};

				::before,
				::after {
					${({ theme }) => theme.effects.gradientRect}
					content: "";
					height: 4em;
					width: 4em;
					position: absolute;
					z-index: 1;
				}

				::before {
					bottom: -25.25%;
					left: -21.75%;
				}

				::after {
					top: -25.25%;
					right: -21.75%;
				}
			`;
		}

		return css`
			background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
		`;
	}}

	:hover {
		cursor: pointer;
	}
`;

const Day = styled.p<{ active?: boolean; dark?: boolean }>`
	color: ${({ active, dark, theme }) => {
		if (active) {
			return "inherit";
		}

		return dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2];
	}};
	font: 700 1.6em/1.375em "Inter", sans-serif;
	letter-spacing: -0.02em;
	text-align: center;
	text-transform: capitalize;
`;

const Date = styled(Day)`
	color: ${({ active, dark, theme }) => {
		if (active) {
			return "inherit";
		}

		return dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6];
	}};
`;

export interface DateCardProps {
	active?: boolean;
	dark?: boolean;
	date: number;
	day: string;
	onClick: (day?: string, date?: number) => void;
}

const DateCard = ({
	onClick,
	day,
	date,
	active = false,
	dark = false
}: DateCardProps) => {
	const slicedDay = day.slice(0, 3);
	const newDate = date < 10 ? `0${date}` : date;

	return (
		<BouncyThrob>
			{startAnimation => {
				const onClickHandler: MouseEventHandler = () => {
					startAnimation();
					onClick(day, date);
				};

				return (
					<Container
						active={active}
						dark={dark}
						onClick={onClickHandler}
						onMouseEnter={startAnimation}
					>
						<Day
							active={active}
							dark={dark}
						>
							{slicedDay}
						</Day>
						<Date
							active={active}
							dark={dark}
						>
							{newDate}
						</Date>
					</Container>
				);
			}}
		</BouncyThrob>
	);
};

export default DateCard;
