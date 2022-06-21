import React, {
	Attributes,
	JSXElementConstructor,
	MouseEventHandler,
	ReactElement,
	ReactNode,
	useState
} from "react";
import { CSSTransition } from "react-transition-group";
import baseTransitionMs from "../../../styles/global/base-transition-ms";

/**
 * Activate bouncyThrob animation on hover and click.
 */
const BouncyThrob = ({
	children,
	onClick
}: {
	children: ReactNode;
	onClick: MouseEventHandler | (() => void);
}) => {
	const [ animate, setAnimate ] = useState(false);

	const startAnimation = () => setAnimate(true);

	const onClickHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
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
			{React.cloneElement(
				children as ReactElement<
					unknown,
					string | JSXElementConstructor<unknown>
				>,
				{
					onClick      : onClickHandler,
					onMouseEnter : startAnimation
				} as Attributes
			)}
		</CSSTransition>
	);
};

export default BouncyThrob;
