import styled from "styled-components";
import Card from "../Cards/Card";
import React, { MouseEventHandler } from "react";
import BouncyThrob from "../Animations/BouncyThrob";
import { v4 as uuidv4 } from "uuid";

const Container = styled(Card)`
	align-items: center;
	column-gap: 1.8em;
	display: grid;
	grid-auto-rows: minmax(max-content, max-content);
	grid-template-columns: repeat(2, max-content);
	height: max-content;
	justify-items: center;
	min-height: 10em;
	padding: 0.6em 0.9em;
	row-gap: 1.4em;
	width: 7.5em;

	${({ dark, theme }) => !dark && theme.effects.boxShadows[1]}

	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
`;

const Circle = styled.div`
	min-width: 2em;
	width: 2em;
	min-height: 2em;
	height: 2em;
	border-radius: 50%;
	background-color: ${({ color }) => color};
	cursor: pointer;
	transition: outline 0.2s ease-in-out;
	outline: 0 solid transparent;

	:hover {
		outline: 0.2em solid ${({ theme }) => theme.colors.light.UI[3]};
	}
`;

interface Color {
	color: string;
	onClick: MouseEventHandler;
}

interface ColorsProps {
	colors: Color[];
	dark?: boolean;
}

const ColorsPopup = ({ colors, dark = false }: ColorsProps) => (
	<Container dark={dark}>
		{colors.map(({ color, onClick }) => {
			return (
				<BouncyThrob key={uuidv4()}>
					{startAnimation => {
						const onClickHandler: MouseEventHandler = e => {
							startAnimation();
							onClick(e);
						};

						return (
							<Circle color={color} onClick={onClickHandler} />
						);
					}}
				</BouncyThrob>
			);
		})}
	</Container>
);

export default React.memo(ColorsPopup);
