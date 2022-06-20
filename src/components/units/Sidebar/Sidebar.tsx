import styled from "styled-components";
import ButtonLg from "../Buttons/ButtonLg";
import Card from "../Cards/Card";
import Actions from "./Actions";
import UserGreeting from "./UserGreeting";

const Container = styled(Card).attrs({ as : "nav" })`
	height: 100vh;
	min-width: 16em;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]};
	flex-direction: column;
	justify-content: space-between;
	padding: 3em 1.5em 3em 2em;

	${({ dark, theme }) => !dark && theme.effects.boxShadows[1]}
	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
`;

/**
 *
 * @param {{
 *  actions: {text: string, onClick: (e: any) => void, alert?: boolean}[],
 *  button: {text: string, onClick: (e: any) => void},
 *  username: string,
 *  dark?: boolean
 * }} props
 *
 * @returns
 */
const Sidebar = ({ actions, button, username, dark = false }) => {
	return (
		<Container dark={dark}>
			<UserGreeting dark={dark}>{username || "Username"}</UserGreeting>
			<Actions
				actions={actions}
				dark={dark}
			/>
			<ButtonLg
				dark={dark}
				onClick={button.onClick}
			>
				{button.text}
			</ButtonLg>
		</Container>
	);
};

export default Sidebar;
