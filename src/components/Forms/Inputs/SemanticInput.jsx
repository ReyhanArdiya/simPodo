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
	${({ colors, hasMsg, dark, theme, valid }) => {
		if (valid) {
			return css`
					outline: ${outlineWidth}px solid ${dark ? theme.colors.dark.semantic.good : theme.colors.light.semantic.good};
                    ${colors?.valid && css`outline-color: ${colors.valid};`}
			`;
		}

		if (hasMsg) {
			return css`
				outline: ${outlineWidth}px solid ${dark ? theme.colors.dark.semantic.bad : theme.colors.light.semantic.bad};
                ${colors?.error && css`outline-color: ${colors.error};`}
			`;
		}
	}}

	outline-offset: -${outlineWidth}px;
`;

const ErrorMsg = styled.label`
	font: 500 1.6em "Inter", sans-serif;
	text-align: left;

	color: ${({ color, dark, theme }) => {
		if (color) {
			return color;
		}

		return dark ?
			theme.colors.dark.semantic.bad :
			theme.colors.light.semantic.bad;
	}};
`;

/**
 * SemanticInput
 *
 * @typedef {import("react").InputHTMLAttributes & {errorMsg?: ?string, dark?: boolean, valid?: boolean, colors?: {error: string, valid: string}}} SemanticInput
 */

/**
 *
 * @param {SemanticInput} props
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
				colors={props.colors}
				dark={props.dark}
				hasMsg={props.errorMsg}
				id={id}
				valid={valid}
			/>
			{!valid && props.errorMsg &&
				<ErrorMsg
					color={props.colors?.error}
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
