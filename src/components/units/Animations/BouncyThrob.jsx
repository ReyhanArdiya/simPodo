import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import baseTransitionMs from "../../../styles/global/base-transition-ms";

/**
 * Activate bouncyThrob animation on hover and click.
 *
 * @param {{children: any, onClick: EventListener}} props
 *
 * @returns
 */
const BouncyThrob = ({ children, onClick }) => {
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
			timeout={baseTransitionMs}
		>
			{React.cloneElement(children, {
				onClick      : onClickHandler,
				onMouseEnter : startAnimation
			})}
		</CSSTransition>

	);
};

export default BouncyThrob;