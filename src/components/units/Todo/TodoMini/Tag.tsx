import styled from "styled-components";
import type { TagProps } from "./interfaces/tag-props.interface";

const Tag = styled.p<TagProps>`
    color: ${({ tagColor }) => tagColor};
    font: 300 1.2em "Nunito", sans-serif;
    letter-spacing: -0.03em;
    ${({ edit }) => edit && "cursor: pointer;"}
`;

export default Tag;