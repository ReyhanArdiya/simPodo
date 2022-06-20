import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import baseTransitionMs from "../../../styles/global/base-transition-ms";

/**
 * Activate `bouncyMove[Left | Right]` animation on enter and exit.
 *
 * @param {{children: any, onClick: (e: Event) => void, direction?: "left" | "right", CSSTransitionOpts?: any}} props
 *
 * @returns
 */
const BouncyMove = ({
	children,
	onClick,
	direction = "left",
	CSSTransitionOpts = {}
}) => {
	const [ isClicked, setIsClicked ] = useState(false);

	const onClickHandler = e => {
		setIsClicked(true);
		onClick(e);
	};

	return (
		<CSSTransition
			classNames={`bouncy-move-${direction}`}
			in={isClicked}
			timeout={baseTransitionMs}
			{...CSSTransitionOpts}
			onEntered={() => setIsClicked(false)}
		>
			{React.cloneElement(children, { onClick : onClickHandler })}
		</CSSTransition>
	);
};

export default BouncyMove;
