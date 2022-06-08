import styled from "styled-components";
import React from "react";
import FormCard from "./FormCard";
import Input from "./Input";
import ButtonLg from "../Buttons/ButtonLg";
import { v4 as uuidv4 } from "uuid";

const Container = styled(FormCard).attrs({ as : "form" })`
	gap: 2em;
	padding: 0 2.8em;
`;

const Label = styled.label`
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
	font: 900 2em "Nunito", sans-serif;
	text-align: center;
`;

const SingleInputForm = React.forwardRef(
	(
		{
			title,
			onSubmit,
			buttonText,
			inputOpts,
			inputId = uuidv4(),
			dark = false
		},
		ref
	) => {
		const onSubmitHandler = e => {
			e.preventDefault();
			onSubmit(e);
		};

		return (
			<Container
				dark={dark}
				onSubmit={onSubmitHandler}
			>
				<Label
					dark={dark}
					htmlFor={inputId}
				>{title}</Label>
				<Input
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
