import styled from "styled-components";

const Tag = styled.p`
    color: ${({ color }) => color};
    font: 300 1.2em "Nunito", sans-serif;
    letter-spacing: -0.03em;
    ${({ edit }) => edit && "cursor: pointer;"}
`;

export default Tag;