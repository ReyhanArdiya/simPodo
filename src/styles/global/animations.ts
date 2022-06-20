import { css } from "styled-components";
import baseTransitionMs from "./base-transition-ms";

const bouncyGrow = css`
	@keyframes bouncyGrowEnter {
		from {
			transform-origin: center;
			transform: scale(0);
		}

		50% {
			transform-origin: top;
			transform: scale(1.1);
		}

		to {
			transform-origin: center;
			transform: scale(1);
		}
	}

	.bouncy-grow-enter-active,
	.bouncy-grow-appear-active,
	.bouncy-grow-exit-active {
		animation: bouncyGrowEnter ${baseTransitionMs}ms both ease-in-out;
	}

	.bouncy-grow-exit-active {
		animation-direction: reverse;
	}
`;

const bouncyThrob = css`
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
		animation: bouncyThrob ${baseTransitionMs * 0.6}ms ease-in-out;
	}
`;

const bouncyMoveLeft = css`
	@keyframes bouncyMoveLeft {
		from {
			transform: translateX(0);
		}

		33% {
			transform: translateX(0.3em);
		}

		66% {
			transform: translateX(-1.3em);
		}

		to {
			transform: translateX(-1em);
		}
	}

	.bouncy-move-left-enter-active {
		transform-origin: right;
		animation: bouncyMoveLeft ${baseTransitionMs}ms both ease-in-out 1;
	}

	.bouncy-move-left-exit-active {
		transform-origin: left;
		animation: bouncyMoveLeft ${baseTransitionMs}ms reverse both ease-in-out
			1;
	}
`;

const bouncyMoveRight = css`
	@keyframes bouncyMoveRight {
		from {
			transform: translateX(0);
		}

		33% {
			transform: translateX(-0.3em);
		}

		66% {
			transform: translateX(1.3em);
		}

		to {
			transform: translateX(1em);
		}
	}

	.bouncy-move-right-enter-active {
		transform-origin: left;
		animation: bouncyMoveRight ${baseTransitionMs}ms both ease-in-out 1;
	}

	.bouncy-move-right-exit-active {
		transform-origin: right;
		animation: bouncyMoveRight ${baseTransitionMs}ms reverse both
			ease-in-out 1;
	}
`;

const animations = css`
	${bouncyGrow}
	${bouncyMoveLeft}
    ${bouncyMoveRight}
    ${bouncyThrob}
`;

export default animations;
