import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import BaseDragBg from "./BaseDragBg";

const Container = styled(BaseDragBg)`
	background-color: ${({ dark, theme }) => dark ? theme.colors.dark.tags[4] : theme.colors.light.tags[4]};
	justify-content: flex-start;
`;

const Done = ({ dark = false }) => {
	return (
		<Container dark={dark}>
			<FontAwesomeIcon icon={faCheck} />
		</Container>
	);
};

export default Done;
