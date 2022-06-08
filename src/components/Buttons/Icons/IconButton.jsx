import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const animationMs = 300;

const Button = styled.button`
	width: max-content;
	height: max-content;
    font-size: 1em;
    color: ${({ fill }) => fill};

    @keyframes bouncyThrob {
        from {
            transform: scale(1);
        }

        33% {
            transform: scale(1.1);
        }

        66% {
            transform: scale(0.9);
        }

        to {
            transform: scale(1);
        }
    }

    &.bouncy-throb-enter-active {
        animation: bouncyThrob ${animationMs}ms ease-in-out;
    }
`;

const Icon = styled(FontAwesomeIcon)`
	color: inherit;
	width: 2em;
	height: 2em;
    transform-origin: center;
`;

const IconButton = ({ onClick, fill, icon, className = "" }) => {
	const [ animate, setAnimate ] = useState(false);

	const startAnimation = () => setAnimate(true);

	const onClickHandler = e => {
		startAnimation();
		onClick(e);
	};

	return (
		<CSSTransition
			classNames="bouncy-throb"
			in={animate}
			onEntered={() => setAnimate(false)}
			timeout={animationMs}
		>
			<Button
				className={`${className}`}
			>
				<Icon
					fill={fill}
					icon={icon}
					onClick={onClickHandler}
					onMouseEnter={startAnimation}
				/>
			</Button>
		</CSSTransition>
	);
};

export default IconButton;
