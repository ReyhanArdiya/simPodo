import styled from "styled-components";
import BaseFlash from "./BaseFlash";

const Good = styled(BaseFlash)`
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.semantic.good : theme.colors.light.semantic.good};
`;

export default Good;
