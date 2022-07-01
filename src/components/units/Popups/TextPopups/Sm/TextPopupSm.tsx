import styled from "styled-components";
import Card from "../../../Cards/Card";
import TextSelectionSm from "./TextSelectionSm";
import { v4 as uuidv4 } from "uuid";
import type { MouseEventHandler } from "react";

// TODO should i combine textpopup into one and use breakpoints instead?
const Container = styled(Card)`
	flex-direction: column;
    ${({ dark, theme }) => !dark && theme.effects.boxShadows[1]}
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
	border-radius: 0.3em;
`;

interface TextPopupSmProps {
	text: {
		backgroundColor: string;
		text: string;
		onClick: MouseEventHandler;
		active?: boolean;
	}[];
	dark: boolean;
	className?: string;
}

const TextPopupSm = ({ text, className = "", dark = false }: TextPopupSmProps) => (
	<Container
		as="ul"
		className={className}
		dark={dark}
	>
		{text.map(({ backgroundColor, text, onClick, active }) => {
			return (
				<TextSelectionSm
					active={active}
					backgroundColor={backgroundColor}
					dark={dark}
					key={uuidv4()}
					onClick={onClick}
				>
					{text}
				</TextSelectionSm>
			);
		})}
	</Container>
);

export default TextPopupSm;
