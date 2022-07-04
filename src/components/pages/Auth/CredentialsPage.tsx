import { FormEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import ButtonLg from "../../units/Buttons/ButtonLg";
import SemanticInput from "../../units/Forms/Inputs/SemanticInput";

const Container = styled.form``;

const ModeToggler = styled.button``;

export interface CredentialsPageProps {
	onSubmit: FormEventHandler;
	loginMode?: boolean;
}

const CredentialsPage = ({
	onSubmit,
	loginMode = true
}: CredentialsPageProps) => {
	const [ mode, setMode ] = useState(loginMode);
	const emailRef = useRef<HTMLInputElement>();
	const passwordRef = useRef<HTMLInputElement>();

	const onSubmitHandler: FormEventHandler = e => {
		// TODO seperate these into utils
		if (emailRef.current?.value.includes("@") && passwordRef.current?.value.length >= 7) {
			onSubmit(e);
		}
	};

	return (
		<Container name="credentials">
			<SemanticInput type="email" />
			<SemanticInput type="password" />
			<ModeToggler onClick={() => setMode(p => !p)}>
				{mode ? "sign up" : "login"}
			</ModeToggler>
			<ButtonLg onClick={onSubmitHandler}>
				{mode ? "login" : "sign up"}
			</ButtonLg>
		</Container>
	);
};

export default CredentialsPage;
