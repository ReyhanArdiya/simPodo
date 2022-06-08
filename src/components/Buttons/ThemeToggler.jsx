import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import BouncyGrow from "../Animations/BouncyGrow";

const Container = styled.div`
	font-size: 2.5em;
	position: relative;
	align-items: center;
	display: flex;
	justify-content: center;
	width: fit-content;
	height: fit-content;

    > *:nth-of-type(1) {
		z-index: 2;
    }

    > *:nth-of-type(2) {
        position: absolute;
		z-index: 1;
    }
`;

const Sun = styled(FontAwesomeIcon).attrs({ icon : faSun })`
	color: ${({ theme }) => theme.colors.light.UI[6]};
	${({ theme }) => theme.effects.hoverClick}
`;

const Moon = styled(FontAwesomeIcon).attrs({ icon : faMoon })`
	color: ${({ theme }) => theme.colors.dark.UI[5]};
	${({ theme }) => theme.effects.hoverClick}
`;

const ThemeToggler = ({ onClick = e => console.log(e), dark = false }) => {
	const [ showDark, setShowDark ] = useState(dark);

	const onIconClick = e => {
		setShowDark(showDark => !showDark);
		onClick(e);
	};

	return (
		<Container>
			<BouncyGrow
				transitionKey={showDark}
			>
				{showDark ?
					<Moon
						onClick={onIconClick}
					/> :
					<Sun onClick={onIconClick} />
				}
			</BouncyGrow>
		</Container>
	);
};

export default React.memo(ThemeToggler);
