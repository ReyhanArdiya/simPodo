import type { MouseEventHandler } from "react";
import styled from "styled-components";

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	row-gap: 2.5em;
`;

interface ActionProps {
	alert: boolean;
	dark: boolean;
}

const Action = styled.button<ActionProps>`
    padding: 0;
	margin: 0;
	border: none;
	outline: none;
	cursor: pointer;
    background: none;
    color: ${({ alert, dark, theme }) => {
		if (alert) {
			return dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6];
		}

		return "inherit";
	}};

    font: 900 1.6em "Nunito", sans-serif;
    text-align: center;
`;

interface ActionsProps {
	actions: {
		text: string;
		onClick: MouseEventHandler;
		alert?: boolean;
	}[];
	dark?: boolean;
}

const Actions = ({ actions, dark = false }: ActionsProps) => {
	return (
		<Container>
			{actions.map(({ onClick, text, alert = false }, i) => {
				return (
					<Action
						alert={alert}
						dark={dark}
						key={i}
						onClick={onClick}
					>
						{text}
					</Action>
				);
			})}
		</Container>
	);
};

export default Actions;
