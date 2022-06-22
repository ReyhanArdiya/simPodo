import styled from "styled-components";
import Card from "../../../Cards/Card";
import TextSelectionLg from "./TextSelectionLg";
import { v4 as uuidv4 } from "uuid";
import type { MouseEventHandler } from "react";

const Container = styled(Card)`
	flex-direction: column;
	${({ dark, theme }) => !dark && theme.effects.boxShadows[1]}
	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
	border-radius: 0.9em;
`;

interface TextPopupLgProps {
	text: {
		backgroundColor: string;
		text: string;
		onClick: MouseEventHandler;
		active?: boolean;
	}[];
	dark: boolean;
	className?: string;
}

const TextPopupLg = ({ text, className = "", dark = false }: TextPopupLgProps) => {
	return (
		<Container as="ul" className={className} dark={dark}>
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
