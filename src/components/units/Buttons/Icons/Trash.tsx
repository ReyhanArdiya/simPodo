import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import IconButton from "./IconButton";

const Trash = styled(IconButton).attrs({
	fixedWidth : true,
	icon       : faTrash
})<{
	edit: boolean;
	dark: boolean;
}>`
	color: ${({ edit, dark, theme }) => {
		if (edit) {
			return css`
				${dark ? theme.colors.dark.UI[8] : theme.colors.light.UI[3]}
			`;
		}

		return css`
			${dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[5]}
		`;
	}};
`;

export default Trash;
