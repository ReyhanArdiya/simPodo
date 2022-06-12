import styled from "styled-components";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const outlineWidth = 3;

const BorderedInput = styled(Input)`
	outline: ${outlineWidth}px solid black;
	outline-color: ${({ dark, theme, valid }) => {
		if (valid) {
			return dark ?
				theme.colors.dark.semantic.good :
				theme.colors.light.semantic.good;
		}

		return dark ?
			theme.colors.dark.semantic.bad :
			theme.colors.light.semantic.bad;
	}};
	outline-offset: -${outlineWidth}px;
`;

const ErrorMsg = styled.label`
	font: 300 1.6em "Nunito", sans-serif;
	text-align: left;
	color: ${({ dark, theme }) => dark ?
		theme.colors.dark.semantic.bad :
		theme.colors.light.semantic.bad};
`;

/**
 *
 * @param {import("react").InputHTMLAttributes & {errorMsg?: ?string, dark?: boolean}} props
 *
 * @returns
 */
const SemanticInput = props => {
	const valid = !props.errorMsg;
	const id = props.id || uuidv4();

	return (
		<Container
			dark={props.dark}
			valid={valid}
		>
			<BorderedInput
				{...props}
				dark={props.dark}
				id={id}
				valid={valid}
			/>
			{!valid &&
				<ErrorMsg
					dark={props.dark}
					htmlFor={id}
				>
					{props.errorMsg}
				</ErrorMsg>
			}
		</Container>
	);
};

export default SemanticInput;
