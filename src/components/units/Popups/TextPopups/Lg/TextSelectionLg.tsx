import type { MouseEventHandler } from "react";
import styled from "styled-components";
import TextSelection from "../TextSelection";

const Container = styled(TextSelection)`
	font-size: 3em;
`;

interface TextSelectionLgProps {
	children: string;
	backgroundColor: string;
	onClick: MouseEventHandler;
	active?: boolean;
	dark?: boolean;
}

const TextSelectionLg = ({
	children: text,
	backgroundColor,
	onClick,
	active = false,
	dark = false
}: TextSelectionLgProps) => {
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

export default TextSelectionLg;
