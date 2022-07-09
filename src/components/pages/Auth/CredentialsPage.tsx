import { FormEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import validateEmail from "../../../utils/auth/validateEmail";
import validatePass from "../../../utils/auth/validatePass";
import ButtonLg from "../../units/Buttons/ButtonLg";
import SemanticInput from "../../units/Forms/Inputs/SemanticInput";

const Container = styled.form``;

const ModeToggler = styled.button``;

export interface CredentialsPageProps {
	onSubmit: FormEventHandler;
	loginMode?: boolean;
}

const CredentialsPage = ({ onSubmit, loginMode = true }: CredentialsPageProps) => {
	const [ mode, setMode ] = useState(loginMode);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const onSubmitHandler: FormEventHandler = e => {
		try {
			if (validateEmail(emailRef.current!.value) && validatePass(passwordRef.current!.value)) {
				onSubmit(e);
			}
		} catch (err) {
			// TODO use this to change semanticinput
			console.error(err);
		}
	};

	return (
		<Container name="credentials">
			<SemanticInput ref={emailRef} type="email" />
			<SemanticInput ref={passwordRef} type="password" />
			<ModeToggler onClick={() => setMode(p => !p)}>{mode ? "sign up" : "login"}</ModeToggler>
			<ButtonLg onClick={onSubmitHandler}>{mode ? "login" : "sign up"}</ButtonLg>
		</Container>
	);
};

export default CredentialsPage;
