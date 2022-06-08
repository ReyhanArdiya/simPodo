import { faPen } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import IconButton from "./IconButton";

const Pen = styled(IconButton).attrs({ icon : faPen })`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[8] : theme.colors.light.UI[3]};
`;

export default Pen;
