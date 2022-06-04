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

const animations = css`
	${bouncyGrow}
`;

export default animations;
