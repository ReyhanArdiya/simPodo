import type { MouseEventHandler } from "react";
import styled from "styled-components";
import TextSelection from "../TextSelection";

const Container = styled(TextSelection)`
	font-size: 1.6em;
`;

interface TextSelectionSmProps {
	children: string;
	backgroundColor: string;
	onClick: MouseEventHandler;
	active?: boolean;
	dark?: boolean;
}

const TextSelectionSm = ({
	children: text,
	backgroundColor,
	onClick,
	active = false,
	dark = false
}: TextSelectionSmProps) => {
	return (
		<Container
			active={active}
			backgroundColor={backgroundColor}
			dark={dark}
			onClick={onClick}
		>
			{text}
		</Container>
	);
};

export default TextSelectionSm;
