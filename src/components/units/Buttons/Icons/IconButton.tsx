import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MouseEventHandler } from "react";
import styled from "styled-components";
import BouncyThrob from "../../Animations/BouncyThrob";

const Button = styled.button<{ fill?: string }>`
	width: max-content;
	height: max-content;
	font-size: 1em;
	color: ${({ fill }) => fill};
`;

const Icon = styled(FontAwesomeIcon)`
	color: inherit;
	width: 2em;
	height: 2em;
	transform-origin: center;
`;

export interface IconButtonProps {
	onClick: MouseEventHandler;
	fill: string;
	icon: IconDefinition;
	className?: string;
}

const IconButton = ({
	onClick,
	fill,
	icon,
	className = ""
}: IconButtonProps) => {
	return (
		<BouncyThrob>
			{startAnimation => {
				const onClickHandler: MouseEventHandler = e => {
					startAnimation();
					onClick(e);
				};

				return (
					<Button
						className={`${className}`}
						onClick={onClickHandler}
					>
						<Icon
							fill={fill}
							icon={icon}
						/>
					</Button>
				);
			}}
		</BouncyThrob>
	);
};

export default IconButton;
