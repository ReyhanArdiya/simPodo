import styled from "styled-components";

const BaseDragBg = styled.div<{dark?: boolean}>`
	align-items: center;
	border-radius: inherit;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[1] : theme.colors.light.UI[1]};
	display: flex;
	font-size: 2em;
	height: 100%;
	justify-content: center;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;

    > * {
		width: 3.25em;
		max-width: 3.25em;
	}
`;

export default BaseDragBg;
