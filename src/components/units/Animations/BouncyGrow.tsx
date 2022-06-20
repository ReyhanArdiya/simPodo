import {
	CSSTransition, TransitionGroup
} from "react-transition-group";
import baseTransitionMs from "../../../styles/global/base-transition-ms";

/**
 * Activate bouncyGrow animation on appear. You can also pass children and different
 *`transitionKey` on each rerender to switch content while doing bouncyGrow animation.
 */
const BouncyGrow = ({
	children,
	transitionKey
}: {
	children: JSX.Element;
	transitionKey: never;
}) => {
	return (
		<TransitionGroup component={null}>
			<CSSTransition
				appear
				classNames="bouncy-grow"
				key={transitionKey}
				timeout={baseTransitionMs}
			>
				{children}
			</CSSTransition>
		</TransitionGroup>
	);
};

export default BouncyGrow;
