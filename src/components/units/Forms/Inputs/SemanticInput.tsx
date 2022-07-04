import { forwardRef, InputHTMLAttributes } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { css, keyframes } from "styled-components";
// import { v4 as uuidv4 } from "uuid";
import Input from "./Input";

const shakeEm = 1;

const shake = keyframes`
	from {
		transform: translateX(0);
	}

	20% {
		transform: translateX(${shakeEm}em);
	}

	40% {
		transform: translateX(-${shakeEm}em);
	}

	60% {
		transform: translateX(${shakeEm}em);
	}

	80% {
		transform: translateX(-${shakeEm}em);
	}

	to {
		transform: translateX(0);
	}
`;

const animationMs = 250;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;

	&.has-error-enter-active {
		animation: ${shake} ${animationMs}ms ease-in-out;
	}
`;

const outlineWidth = 3;

interface BorderedInputProps {
	colors?: {
		error?: string;
		valid?: string;
	};
	dark?: boolean;
	hasError?: boolean;
	valid?: boolean;
}

const BorderedInput = styled(Input)<BorderedInputProps>`
	${({ colors, hasError, dark, theme, valid }) => {
		if (valid) {
			return css`
				outline: ${outlineWidth}px solid
					${dark ?
		theme.colors.dark.semantic.good :
		theme.colors.light.semantic.good};
				${colors?.valid &&
				css`
					outline-color: ${colors.valid};
				`}
			`;
		}

		if (hasError) {
			return css`
				outline: ${outlineWidth}px solid
					${dark ?
		theme.colors.dark.semantic.bad :
		theme.colors.light.semantic.bad};
				${colors?.error &&
				css`
					outline-color: ${colors.error};
				`}
			`;
		}
	}}

	outline-offset: -${outlineWidth}px;
`;

const ErrorMsg = styled.label<{ dark?: boolean }>`
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

export interface SemanticInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	errorMsg?: string;
	dark?: boolean;
	valid?: boolean;
	colors?: {
		error?: string;
		valid?: string;
	};
}

const SemanticInput = forwardRef<HTMLInputElement, SemanticInputProps>(
	(props, ref) => {
		const {
			valid,
			id = Math.random() * 357894,
			...borderedInputProps
		} = props;

		return (
			<CSSTransition
				classNames="has-error"
				in={!!props.errorMsg}
				timeout={animationMs}
			>
				<Container>
					<BorderedInput
						as="input"
						{...borderedInputProps}
						colors={props.colors}
						dark={props.dark}
						hasError={!!props.errorMsg}
						id={id}
						ref={ref}
						valid={valid}
					/>
					{!valid && props.errorMsg && (
						<ErrorMsg
							color={props.colors?.error}
							dark={props.dark}
							htmlFor={id}
						>
							{props.errorMsg}
						</ErrorMsg>
					)}
				</Container>
			</CSSTransition>
		);
	}
);
SemanticInput.displayName = "SemanticInput";

export default SemanticInput;
