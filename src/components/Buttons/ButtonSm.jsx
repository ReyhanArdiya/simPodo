import styled, { css } from "styled-components";

const baseStyle = css`
	font-size: 1em;
	padding: 0;
	margin: 0;
	border: none;
	outline: none;
	background: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[6]};
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
	overflow: hidden;
	position: relative;

	:hover {
		cursor: pointer;
	}

	::before, ::after {
		${({ theme }) => theme.effects.gradientRect}
		content: "";
		height: 56.05%;
		position: absolute;
		width: 112.05%;
		z-index: 1;
	}

	::before {
		bottom: -22.7%;
		left: -52%;
	}

	::after {
		top: -20%;
		right: -68.65%;
	}
`;

const Button = styled.button`
	${baseStyle}
	align-items: center;
	border-radius: 0.6rem;
	display: flex;
	filter: drop-shadow(0.12em 0.12em 0.36em #2555bb7f);
	height: 3em;
	justify-content: center;
	width: 3em;
`;

const Content = styled.p`
	${baseStyle}
	align-items: center;
	border-radius: 0.5rem;
	display: flex;
	filter: drop-shadow(0.1em 0.1em 0.3em rgba(37, 85, 187, 0.5));
	font: 900 1.6em/1.5em "Nunito", sans-serif;
	height: 80%;
	justify-content: center;
	letter-spacing: -0.03em;
	width: 80%;
	z-index: 2;
`;

const ButtonSm = ({ children: text = "+", onClick, className = "", dark = false }) => {
	return (
		<Button
			className={className}
			dark={dark}
			onClick={onClick}
		>
			<Content
				dark={dark}
			>{text}</Content>
		</Button>
	);
};

export default ButtonSm;