import { ReactNode, useState } from "react";
import { CSSTransition } from "react-transition-group";
import type { CSSTransitionProps } from "react-transition-group/CSSTransition";
import baseTransitionMs from "../../../styles/global/base-transition-ms";
import type { StartAnimation } from "./start-animation.interface";

type BouncyMoveStartAnimation = StartAnimation;

interface BouncyMoveProps {
	CSSTransitionOpts?: CSSTransitionProps;
	children(startAnimation: BouncyMoveStartAnimation): ReactNode;
	direction?: "left" | "right";
}

/**
 * `children` as a function receives {@link startAnimation} that wil activate
 * `bouncyMove[Left | Right]` based on `direction`.
 */
const BouncyMove = ({
	CSSTransitionOpts,
	children,
	direction = "left",
}: BouncyMoveProps) => {
	const [ animate, setAnimate ] = useState(false);
	const startAnimation = () => setAnimate(true);

	return (
		<CSSTransition
			classNames={`bouncy-move-${direction}`}
			in={animate}
			timeout={baseTransitionMs}
			{...CSSTransitionOpts}
			onEntered={() => setAnimate(false)}
		>
			{children(startAnimation)}
		</CSSTransition>
	);
};

export default BouncyMove;
