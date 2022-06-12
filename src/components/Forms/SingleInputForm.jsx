import React from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ButtonLg from "../Buttons/ButtonLg";
import FormCard from "./FormCard";
import SemanticInput from "./Inputs/SemanticInput";

const Container = styled(FormCard).attrs({ as : "form" })`
	gap: 2em;
	${({ hasError }) => {
		if (hasError) {
			return css`
				padding: 1.5em 2.8em;
				height: max-content;
			`;
		}

		return css`padding: 0 2.8em;`;
	}}
`;

const Label = styled.label`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
	font: 900 2em "Nunito", sans-serif;
	text-align: center;
`;

const SingleInputForm = React.forwardRef(

	/**
	 *
	 * @param {{
	 * 	title: string,
	 * 	onSubmit: FormEventHandler,
	 * 	buttonText: string,
	 * 	inputOpts: import("./Inputs/SemanticInput").SemanticInput,
	 *	dark?: boolean
	 * }} props
	 *
	 * @param {import("react").ForwardedRef} ref
	 *
	 * @returns
	 */
	({ title, onSubmit, buttonText, inputOpts, dark = false }, ref) => {
		const onSubmitHandler = e => {
			e.preventDefault();
			onSubmit(e);
		};

		const inputId = inputOpts?.id || uuidv4();

		return (
			<Container
				dark={dark}
				hasError={inputOpts?.errorMsg}
				onSubmit={onSubmitHandler}
			>
				<Label
					dark={dark}
					htmlFor={inputId}
				>
					{title}
				</Label>
				<SemanticInput
					ref={ref}
					type="text"
					{...inputOpts}
					dark={dark}
					id={inputId}
					title={title}
				/>
				<ButtonLg
					dark={dark}
					type="submit"
				>
					{buttonText}
				</ButtonLg>
			</Container>
		);
	}
);

SingleInputForm.displayName = "TextInputModal";

export default SingleInputForm;
