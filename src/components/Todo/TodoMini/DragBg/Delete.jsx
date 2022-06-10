import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import BaseDragBg from "./BaseDragBg";

const Container = styled(BaseDragBg)`
	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.tags[1] : theme.colors.light.tags[1]};
    justify-content: flex-end;
`;

const Delete = ({ dark = false }) => {
	return (
		<Container dark={dark}>
			<FontAwesomeIcon icon={faTimes}/>
		</Container>
	);
};

export default Delete;
