import styled from "styled-components";
import BaseFlash from "./BaseFlash";

const Warn = styled(BaseFlash)`
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.semantic.warn : theme.colors.light.semantic.warn};
`;

export default Warn;
