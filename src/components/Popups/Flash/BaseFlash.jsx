import styled from "styled-components";
import Card from "../../Cards/Card";

const Container = styled(Card).attrs({ as : "aside" })`
    background: url("/images/bg-flash.png") center/100% 100% no-repeat gray;
    border-radius: 0.6rem;
    color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
    filter: drop-shadow(0px 6px 20px #475572);
    height: 4em;
    padding: 1.3em 3.5em;
    min-width: 24em;
    text-align: center;
    text-transform: uppercase;
`;

const Message = styled.small`
    font: 900 2em "Intertia", sans-serif;
`;

const BaseFlash = ({ children: message, className = "", dark = false }) => {
	return (
		<Container
			className={`${className} ${dark ? "dark" : ""}`}
			dark={dark}
		>
			<Message>{message}</Message>
		</Container>
	);
};

export default BaseFlash;