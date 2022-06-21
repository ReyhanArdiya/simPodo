import React, {
	Attributes,
	JSXElementConstructor,
	MouseEventHandler,
	ReactElement,
	ReactNode,
	useState
} from "react";
import { CSSTransition } from "react-transition-group";
import type { CSSTransitionProps } from "react-transition-group/CSSTransition";
import baseTransitionMs from "../../../styles/global/base-transition-ms";

/**
 * Activate `bouncyMove[Left | Right]` animation on enter and exit.
 */
const BouncyMove = ({
	children,
	onClick,
	direction = "left",
	CSSTransitionOpts
}: {
	children: ReactNode;
	onClick: MouseEventHandler;
	direction?: "left" | "right";
	CSSTransitionOpts?: CSSTransitionProps;
}) => {
	const [ isClicked, setIsClicked ] = useState(false);

	const onClickHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
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
			{React.cloneElement(
				children as ReactElement<
					unknown,
					string | JSXElementConstructor<unknown>
				>,
				{
					onClick : onClickHandler
				} as Attributes
			)}
		</CSSTransition>
	);
};

export default BouncyMove;
