import styled from "styled-components";

const Card = styled.div<{dark?:boolean}>`
    align-items: center;
    display: flex;
    justify-content: center;
    width: fit-content;
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[1] : theme.colors.light.UI[1]};
    ${({ theme }) => theme.effects.borderRadius}
    position: relative;
`;

export default Card;