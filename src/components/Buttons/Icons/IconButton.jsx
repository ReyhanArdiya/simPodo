import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import BouncyThrob from "../../Animations/BouncyThrob";


const Button = styled.button`
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

const IconButton = ({ onClick, fill, icon, className = "" }) => {
	return (
		<BouncyThrob
			onClick={onClick}
		>
			<Button
				className={`${className}`}
			>
				<Icon
					fill={fill}
					icon={icon}
				/>
			</Button>
		</BouncyThrob>

	);
};

export default IconButton;
