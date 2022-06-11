import styled from "styled-components";
import BaseFlash from "./BaseFlash";

const Bad = styled(BaseFlash)`
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.semantic.bad : theme.colors.light.semantic.bad};
`;

export default Bad;