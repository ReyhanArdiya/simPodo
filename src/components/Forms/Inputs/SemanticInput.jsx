import styled, { css } from "styled-components";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

const outlineWidth = 3;

const BorderedInput = styled(Input)`
	${({ hasMsg, dark, theme, valid }) => {
		if (valid) {
			return css`
					outline: ${outlineWidth}px solid ${dark ? theme.colors.dark.semantic.good : theme.colors.light.semantic.good};
				`;
		}
		console.log(hasMsg);
		if (hasMsg) {
			return css`
				outline: ${outlineWidth}px solid ${dark ? theme.colors.dark.semantic.bad : theme.colors.light.semantic.bad};
			`;
		}
	}}

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
 * @param {import("react").InputHTMLAttributes & {errorMsg?: ?string, dark?: boolean, valid?: boolean}} props
 *
 * @returns
 */
const SemanticInput = props => {
	const { valid, id = uuidv4() } = props;

	return (
		<Container
			dark={props.dark}
			valid={valid}
		>
			<BorderedInput
				{...props}
				dark={props.dark}
				hasMsg={props.errorMsg}
				id={id}
				valid={valid}
			/>
			{!valid && props.errorMsg &&
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
