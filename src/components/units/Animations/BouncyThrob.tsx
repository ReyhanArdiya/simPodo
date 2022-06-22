import { ReactNode, useState } from "react";
import { CSSTransition } from "react-transition-group";
import type { CSSTransitionProps } from "react-transition-group/CSSTransition";
import baseTransitionMs from "../../../styles/global/base-transition-ms";
import type { StartAnimation } from "./start-animation.interface";

type BouncyThrobStartAnimation = StartAnimation

interface BouncyThrobProps {
	CSSTransitionOpts?: CSSTransitionProps;
	children(startAnimation: BouncyThrobStartAnimation): ReactNode;
}

/**
 * `children` as a function receives {@link startAnimation} to animate.
 */
const BouncyThrob = ({ CSSTransitionOpts, children }: BouncyThrobProps) => {
	const [ animate, setAnimate ] = useState(false);
	const startAnimation = () => setAnimate(true);

	return (
		<CSSTransition
			classNames="bouncy-throb"
			in={animate}
			timeout={baseTransitionMs}
			{...CSSTransitionOpts}
			onEntered={() => setAnimate(false)}
		>
			{children(startAnimation)}
		</CSSTransition>
	);
};

export default BouncyThrob;
