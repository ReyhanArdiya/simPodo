import styled, { css } from "styled-components";
import React from "react";

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
	-webkit-tap-highlight-color: transparent;

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
	justify-content: center;
	height: 3em;
	width: 3em;
	padding: 0.3em;

	--drop-shadow: drop-shadow(0.12em 0.12em 0.36em #2555bb7f);
	filter: var(--drop-shadow);

	:hover {
		filter: var(--drop-shadow) brightness(105%);
	}

	&:active {
		filter: var(--drop-shadow) brightness(95%);
	}
`;

const Content = styled.p`
	${baseStyle}
	align-items: center;
	border-radius: 0.5rem;
	display: flex;
	font: 900 1.6em/1.5em "Nunito", sans-serif;
	justify-content: center;
	letter-spacing: -0.03em;
	height: 100%;
	width: 100%;
	z-index: 2;
	text-transform: uppercase;

	--drop-shadow: drop-shadow(0.1em 0.1em 0.3em rgba(37, 85, 187, 0.5));
	filter: var(--drop-shadow);

	:hover {
		filter: var(--drop-shadow) brightness(105%);
	}

	&:active {
		filter: var(--drop-shadow) brightness(95%);
	}
`;

const ButtonSm = ({ children: text = "+", onClick, className = "", type = "button", dark = false }) => {
	return (
		<Button
			className={className}
			dark={dark}
			onClick={onClick}
			type={type}
		>
			<Content
				dark={dark}
			>{text}</Content>
		</Button>
	);
};

export default React.memo(ButtonSm);