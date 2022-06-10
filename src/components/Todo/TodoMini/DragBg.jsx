import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: inherit;
    display: flex;
    justify-content: space-between;
`;

const Indicator = styled.div`
    flex-grow: 0.15;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: inherit;
    color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[1] : theme.colors.light.UI[1]};
    font-size: 2em;
`;

const Done = styled(Indicator)`
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.tags[4] : theme.colors.light.tags[4]};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

const Delete = styled(Indicator)`
    background-color: ${({ dark, theme }) => dark ? theme.colors.dark.tags[1] : theme.colors.light.tags[1]};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;

const DragBg = ({ dark = false }) => {
	return (
		<Container>
			<Done dark={dark}>
				<FontAwesomeIcon icon={faCheck}/>
			</Done>
			<Delete dark={dark}>
				<FontAwesomeIcon icon={faTimes}/>
			</Delete>
		</Container>
	);
};

export default DragBg;