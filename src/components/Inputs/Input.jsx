import styled from "styled-components";
import Card from "../Cards/Card";

const Input = styled(Card).attrs({ as : "input" })`
    outline: none;
    border: none;
    font: 900 3em "Nunito", sans-serif;
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[3] : theme.colors.light.UI[1]};
    color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[7]};
    padding: 0.15em 0.3em;
`;

export default Input;