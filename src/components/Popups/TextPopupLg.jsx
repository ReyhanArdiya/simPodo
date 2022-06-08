import styled from "styled-components";
import Card from "../Cards/Card";
import TextSelectionLg from "./TextSelectionLg";
import { v4 as uuidv4 } from "uuid";

const Container = styled(Card).attrs({ as : "ul" })`
	flex-direction: column;
    ${({ dark, theme }) => !dark && theme.effects.boxShadows[1]}
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
	border-radius: 0.9em;
`;

/**
 *
 * @param {{
 * text: {
 * 	backgroundColor: string,
 * 	text: string,
 * 	onClick: (e) => void,
 * 	active?: boolean,
 * }[],
 * dark: boolean,
 * className?: string
 * }} props
 *
 * @returns
 */
const TextPopupLg = ({ text, className = "", dark = false }) => {
	return (
		<Container
			className={className}
			dark={dark}
		>
			{text.map(({ backgroundColor, text, onClick, active }) => {
				return (
					<TextSelectionLg
						active={active}
						backgroundColor={backgroundColor}
						dark={dark}
						key={uuidv4()}
						onClick={onClick}
					>
						{text}
					</TextSelectionLg>
				);
			})}
		</Container>
	);
};

export default TextPopupLg;
