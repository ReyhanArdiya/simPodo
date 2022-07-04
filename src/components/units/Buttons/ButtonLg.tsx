import styled from "styled-components";
import ButtonSm from "./ButtonSm";
import React from "react";

// TODO this doesnt get ButtonSm props???
// TODO should i refactor sm and lg into one and just use breakpoints?
const ButtonLg = styled(ButtonSm)`
	& {
		width: 8em;
		height: 4em;
	}
`;

export default React.memo(ButtonLg);
