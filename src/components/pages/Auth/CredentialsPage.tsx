import { FormEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import validateEmail from "../../../utils/auth/validateEmail";
import validatePass from "../../../utils/auth/validatePass";
import ButtonLg from "../../units/Buttons/ButtonLg";
import BlueCard from "../../units/Cards/BlueCard";
import SemanticInput from "../../units/Forms/Inputs/SemanticInput";
import GradientRect from "../../units/Shapes/GradientRect";

const Container = styled(BlueCard)`
	width: 100vw;
	height: 100vh;
	min-height: 76.8em;
	align-items: center;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	padding: 0 3.8em;
	padding-top: 11em;
	position: relative;
	border-radius: 0;
`;

const Title = styled.h1<{ dark?: boolean }>`
	font: 900 5.6em "Inter", sans-serif;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[2] : theme.colors.light.UI[1]};
`;

const Form = styled.form`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	> .semantic-input:first-of-type {
		margin-bottom: 3em;
	}
	> .semantic-input:nth-of-type(2) {
		margin-bottom: 1.5em;
	}
	margin-top: 15.3em;
	margin-bottom: 6.7em;
`;

const ModeToggler = styled.button<{ dark?: boolean }>`
	font: 300 1.6em/1.375em "Nunito", sans-serif;
	color: ${({ dark, theme }) => dark ? theme.colors.dark.UI[5] : theme.colors.light.UI[5]};
	text-align: center;
	width: 100%;
`;

const StyledGradientRect = styled(GradientRect)`
	width: 16em;
	height: 22em;
`;

const SGR1 = styled(StyledGradientRect)`
	top: 0;
	right: 0;
`;

const SGR2 = styled(StyledGradientRect)`
	top: 34.5%;
	left: 0;
`;

const SGR3 = styled(StyledGradientRect)`
	bottom: 0;
	right: 0;
`;

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
		<Container id="credentials">
			<SGR1 />
			<SGR2 />
			<SGR3 />
			<Title>simPodo</Title>
			<Form name="credentials">
				<SemanticInput ref={emailRef} type="email" />
				<SemanticInput ref={passwordRef} type="password" />
				<ModeToggler onClick={() => setMode(p => !p)}>{mode ? "sign up" : "login"}</ModeToggler>
			</Form>
			<ButtonLg onClick={onSubmitHandler}>{mode ? "login" : "sign up"}</ButtonLg>
		</Container>
	);
};

export default CredentialsPage;
