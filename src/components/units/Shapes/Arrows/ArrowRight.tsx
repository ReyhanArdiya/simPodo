import styled from "styled-components";

const Container = styled.svg.attrs({
	viewBox : "0 0 10 14",
	xmlns   : "http://www.w3.org/2000/svg"
})`
	height: 1.4em;
	width: 1em;
    fill: none;
    stroke: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6]};

    ${({ theme }) => theme.effects.hoverClick}
`;

const Path = styled.path.attrs({ d : "M2 12L7 7L2 2" })`
    stroke-linecap: round;
	stroke-width: 0.3em;
`;

const ArrowRight = ({ onClick, className = "", dark = false }) => {
	return (
		<Container
			className={className}
			dark={dark}
		>
			<Path
				onClick={onClick}
			/>
		</Container>
	);
};

export default ArrowRight;

