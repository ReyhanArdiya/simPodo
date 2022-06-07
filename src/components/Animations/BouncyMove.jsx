import { CSSTransition } from "react-transition-group";
import baseTransitionMs from "../../styles/global/base-transition-ms";

/**
 * Activate `bouncyMove[Left | Right]` animation on enter and exit.
 *
 * @param {{children: any, transitionIn: any, direction?: "left" | "right", CSSTransitionOpts?: any}} props
 *
 * @returns
 */
const BouncyMove = ({ children, transitionIn, direction = "left", CSSTransitionOpts = {} }) => {
	return (
		<CSSTransition
			classNames={`bouncy-move-${direction}`}
			in={transitionIn}
			timeout={baseTransitionMs}
			{...CSSTransitionOpts}
		>
			{children}
		</CSSTransition>
	);
};

export default BouncyMove;