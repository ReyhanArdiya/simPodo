import styled from "styled-components";
import type { ArrowProps } from "./arrow-props.interface";

const Container = styled.svg.attrs({
	viewBox : "0 0 10 14",
	xmlns   : "http://www.w3.org/2000/svg"
})<{ dark: boolean }>`
	height: 1.4em;
	width: 1em;
	fill: none;
	stroke: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6]};

	${({ theme }) => theme.effects.hoverClick}
`;

const Path = styled.path.attrs({ d : "M8 12L3 7L8 2" })`
	stroke-linecap: round;
	stroke-width: 0.3em;
`;

const ArrowLeft = ({ onClick, className = "", dark = false }: ArrowProps) => {
	return (
		<Container className={className} dark={dark}>
			<Path onClick={onClick} />
		</Container>
	);
};

export default ArrowLeft;
