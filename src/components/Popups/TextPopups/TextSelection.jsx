import styled from "styled-components";
import Card from "../../Cards/Card";

const TextSelection = styled(Card).attrs({ as : "li" })`
    list-style: none;
    font: 900 1em "Inter", sans-serif;
    text-align: center;
    padding: 0.5em 1.5em;
    border-radius: 0.3em;
    z-index: 2;
    cursor: pointer;
    width: 100%;

    transition: color 0.1s ease-in-out;

    color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[2]};
    background-color: transparent;

    ${({ active }) => active ? "&" : ":hover"} {
        color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
        background-image: url("/images/bg-text-selection-sm.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-color: ${({ backgroundColor }) => backgroundColor};
    }
`;

export default TextSelection;

