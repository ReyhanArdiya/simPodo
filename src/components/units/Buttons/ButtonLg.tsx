import styled from "styled-components";
import ButtonSm from "./ButtonSm";
import React from "react";

const ButtonLg = styled(ButtonSm)`
	& {
		width: 8em;
		height: 4em;
	}
`;

export default React.memo(ButtonLg);
