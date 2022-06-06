import styled from "styled-components";

const Container = styled.svg.attrs({
	viewBox : "0 0 13 9",
	xmlns   : "http://www.w3.org/2000/svg"
})`
	height: 0.9em;
	width: 1.3em;
    fill: none;
    stroke: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6]};

    ${({ theme }) => theme.effects.hoverClick}

    transform: rotate(${({ angle }) => {
		switch (angle) {
			case "left" :
				return "90";
			case "right" :
				return "-90";
			case "up" :
				return "180";
			default :
				return "0";
		}
	}}deg);
`;

const Path = styled.path.attrs({ d : "M1.5 1.66998L6.5 6.66998L11.5 1.66998", })`
    stroke-linecap: round;
	stroke-width: 0.3em;
`;

const Arrow = (onClick, angle = "down", className = "", dark = false) => {
	return (
		<Container
			angle={angle}
			className={className}
			dark={dark}
		>
			<Path
				onClick={onClick}
			/>
		</Container>
	);
};

export default Arrow;