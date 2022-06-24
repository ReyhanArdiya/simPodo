import React, { FormEvent, FormEventHandler } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ButtonLg from "../Buttons/ButtonLg";
import FormCard from "./FormCard";
import SemanticInput, { SemanticInputProps } from "./Inputs/SemanticInput";

const Container = styled(FormCard)<{hasError?: boolean}>`
	gap: 2em;
	${({ hasError }) => {
		if (hasError) {
			return css`
				padding: 1.5em 2.8em;
				height: max-content;
			`;
		}

		return css`
			padding: 0 2.8em;
		`;
	}}
`;

const Label = styled.label<{ dark?: boolean }>`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
	font: 900 2em "Nunito", sans-serif;
	text-align: center;
`;

export interface SingleInputFormProps {
	title: string;
	onSubmit: FormEventHandler;
	buttonText: string;
	inputOpts: SemanticInputProps;
	dark?: boolean;
}

const SingleInputForm = React.forwardRef<HTMLFormElement, SingleInputFormProps>(
	({ title, onSubmit, buttonText, inputOpts, dark = false }, ref) => {
		const onSubmitHandler = (e: FormEvent) => {
			e.preventDefault();
			onSubmit(e);
		};

		const inputId = inputOpts?.id || uuidv4();

		return (
			<Container
				as="form"
				hasError={!!inputOpts?.errorMsg}
				onSubmit={onSubmitHandler}
			>
				<Label
					dark={dark}
					htmlFor={inputId}
				>
					{title}
				</Label>
				<SemanticInput
					ref={ref as never}
					type="text"
					{...inputOpts}
					colors={{ error : "#c50a5a" }}
					dark={dark}
					id={inputId}
					title={title}
				/>
				<ButtonLg dark={dark} onClick={() => null} type="submit">
					{buttonText}
				</ButtonLg>
			</Container>
		);
	}
);

SingleInputForm.displayName = "TextInputModal";

export default SingleInputForm;
