import { CSSTransition } from "react-transition-group";
import styled, { keyframes } from "styled-components";
import Card from "../../Cards/Card";

const animationMs = 375;
// const animationMs = 1000;
const rotationDeg = 5;
const growScaleOffset = 0.15;

const flashAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(3em);
    }

    25% {
        opacity: 1;
        transform: translateY(0);
    }

    40% {
        /* Shake animation */
        transform: rotate(${rotationDeg}deg) scale(${1 - growScaleOffset});
    }

    55% {
        transform: rotate(-${rotationDeg}deg) scale(${1 - growScaleOffset});
    }

    70% {
        transform: rotate(${rotationDeg}deg) scale(${1 + growScaleOffset});
    }

    85% {
        transform: rotate(-${rotationDeg}deg) scale(${1 + growScaleOffset});
    }

    100% {
        transform: rotate(0) scale(1);
    }
`;

const Container = styled(Card).attrs({ as : "aside" })`
    background: url("/images/bg-flash.png") center/100% 100% no-repeat gray;
    border-radius: 0.6rem;
    color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
    filter: drop-shadow(0px 6px 20px #475572);
    height: 4em;
    padding: 1.3em 3.5em;
    min-width: 24em;
    text-align: center;
    text-transform: uppercase;

    &.flash-animation-appear-active,
    &.flash-animation-enter-active {
        animation: ${flashAnimation} ${animationMs}ms both ease-in-out;
    }

    &.flash-animation-exit-active {
        animation: ${flashAnimation} ${animationMs}ms both ease-in-out reverse;
    }
`;

const Message = styled.small`
    font: 900 2em "Intertia", sans-serif;
`;

const BaseFlash = ({ children: message, show = true, className = "", dark = false }) => {
	return (
		<CSSTransition
			appear
			classNames={"flash-animation"}
			in={show}
			mountOnEnter
			timeout={animationMs}
			unmountOnExit
		>
			<Container
				className={`${className} ${dark ? "dark" : ""}`}
				dark={dark}
			>
				<Message>{message}</Message>
			</Container>
		</CSSTransition>
	);
};

export default BaseFlash;