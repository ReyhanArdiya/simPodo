import styled from "styled-components";

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	row-gap: 2.5em;
`;

const Action = styled.button`
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

/**
 *
 * @param {{
 *  actions: {text: string, onClick: (e: any) => void, alert?: boolean}[],
 *  dark?: boolean
 * }} props
 *
 * @returns
 */
const Actions = ({ actions, dark = false }) => {
	return (
		<Container>
			{actions.map((action, i) => {
				return (
					<Action
						alert={action.alert}
						dark={dark}
						key={i}
						onClick={action.onClick}
					>
						{action.text}
					</Action>
				);
			})}
		</Container>
	);
};

export default Actions;
