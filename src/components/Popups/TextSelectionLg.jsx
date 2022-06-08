import styled from "styled-components";
import TextSelection from "./TextSelection";

const Container = styled(TextSelection)`
	font-size: 3em;
`;

const TextSelectionLg = ({
	children: text,
	backgroundColor,
	onClick,
	active = false,
	dark = false
}) => {
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
