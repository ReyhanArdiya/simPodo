import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import IconButton from "./IconButton";

const Checkbox = styled(IconButton).attrs({ icon : faCheckSquare })<{
	edit?: boolean;
	dark?: boolean;
}>`
	color: ${({ edit, dark, theme }) => {
		if (edit) {
			return css`
				${dark ? theme.colors.dark.UI[8] : theme.colors.light.UI[3]}
			`;
		}

		return css`
			${dark ? theme.colors.dark.UI[6] : theme.colors.light.UI[2]}
		`;
	}};
`;

export default Checkbox;
