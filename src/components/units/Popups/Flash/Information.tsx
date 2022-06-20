import styled from "styled-components";
import BaseFlash from "./BaseFlash";

const Information = styled(BaseFlash)`
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.semantic.information : theme.colors.light.semantic.information};
`;

export default Information;