import type { MouseEventHandler } from "react";
import styled from "styled-components";
import ButtonLg from "../Buttons/ButtonLg";
import Card from "../Cards/Card";
import Actions from "./Actions";
import UserGreeting from "./UserGreeting";

const Container = styled(Card)<{dark?: boolean}>`
	height: 100vh;
	min-width: 16em;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]};
	flex-direction: column;
	justify-content: space-between;
	padding: 3em 1.5em 3em 2em;

	${({ dark, theme }) => !dark && theme.effects.boxShadows[1]}
	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
`;

interface SidebarProps {
	actions: {
		text: string;
		onClick: MouseEventHandler;
		alert?: boolean;
	}[];
	button: { text: string; onClick: MouseEventHandler };
	username: string;
	dark?: boolean;
}

const Sidebar = ({ actions, button, username, dark = false }: SidebarProps) => {
	return (
		<Container as="nav" dark={dark}>
			<UserGreeting dark={dark}>{username || "Username"}</UserGreeting>
			<Actions actions={actions} dark={dark} />
			<ButtonLg dark={dark} onClick={button.onClick}>
				{button.text}
			</ButtonLg>
		</Container>
	);
};

export default Sidebar;
