import styled from "styled-components";
import ButtonLg from "../Buttons/ButtonLg";
import FormCard from "./FormCard";

const Container = styled(FormCard)`
    padding: 0 3.1em;
    row-gap: 3em;
`;

const Title = styled.p`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
    font: 900 3.6em "Nunito", sans-serif;
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4.5em;
    width: 100%;
`;

/**
 *
 * @param {{
 *  title: string,
 *  button1: {text: string, onClick: (e) => void},
 *  button2: {text: string, onClick: (e) => void},
 *  dark? : boolean
 * }} props
 *
 * @returns
 */
const SelectionForm = ({ title, button1, button2, dark = false }) => {
	return (
		<Container dark={dark}>
			<Title dark={dark}>{title}</Title>
			<Actions>
				<ButtonLg
					dark={dark}
					onClick={button1.onClick}
				>
					{button1.text}
				</ButtonLg>
				<ButtonLg
					dark={dark}
					onClick={button2.onClick}
				>
					{button2.text}
				</ButtonLg>
			</Actions>
		</Container>
	);
};

export default SelectionForm;