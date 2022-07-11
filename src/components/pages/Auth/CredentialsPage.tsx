import { FormEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useInputValidation from "../../../hooks/use-input-validation";
import InvalidEmailError from "../../../models/errors/invalid-email-error";
import InvalidPassError from "../../../models/errors/invalid-pass-error";
import { themeSliceSelectors } from "../../../store/theme/slice";
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
	-webkit-tap-highlight-color: transparent;
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
	onSubmit(email: string, password: string): Promise<void>;
	loginMode?: boolean;
}

let attemptedSubmit = false;
const CredentialsPage = ({
	onSubmit,
	loginMode = true
}: CredentialsPageProps) => {
	const dark = useSelector(themeSliceSelectors.selectIsDark);

	const [ mode, setMode ] = useState(loginMode);

	const {
		inputRef: emailRef,
		isValid: isEmailValid,
		validateInput: validateEmailInput,
		errMsg: emailErrMsg,
		resetInput: resetEmailInput
	} = useInputValidation((inputVal, setEmailErrMsg) => {
		try {
			setEmailErrMsg("");
			return validateEmail(inputVal);
		} catch (err) {
			if (err instanceof InvalidEmailError) {
				setEmailErrMsg(err.message);
			}
		}

		return false;
	});

	const {
		inputRef: passwordRef,
		isValid: isPassValid,
		validateInput: validatePassInput,
		errMsg: passErrMsg,
		resetInput: resetPassInput
	} = useInputValidation((inputVal, setPassErrMsg) => {
		try {
			setPassErrMsg("");
			return validatePass(inputVal);
		} catch (err) {
			if (err instanceof InvalidPassError) {
				setPassErrMsg(err.message);
			}
		}

		return false;
	});

	const onSubmitHandler: FormEventHandler = async () => {
		// CMT I set force to true to handle when the user submits but they haven't touched.
		validateEmailInput(!attemptedSubmit);
		validatePassInput(!attemptedSubmit);

		attemptedSubmit = true;

		try {
			if (isEmailValid && isPassValid) {
				await onSubmit(emailRef.current!.value, passwordRef.current!.value);
				resetEmailInput();
				resetPassInput();
			}
		} catch (err) {
			// TODO show modal here
			alert(err);
		}
	};

	return (
		<Container dark={dark} id="credentials">
			<SGR1 />
			<SGR2 />
			<SGR3 />
			<Title dark={dark}>simPodo</Title>
			<Form name="credentials">
				<SemanticInput
					dark={dark}
					errorMsg={emailErrMsg}
					formNoValidate
					onChange={() => attemptedSubmit && validateEmailInput()}
					placeholder="email"
					ref={emailRef}
					type="email"
					valid={isEmailValid}
				/>
				<SemanticInput
					dark={dark}
					errorMsg={passErrMsg}
					formNoValidate
					onChange={() => attemptedSubmit && validatePassInput()}
					placeholder="password"
					ref={passwordRef}
					type="password"
					valid={isPassValid}
				/>
				<ModeToggler
					dark={dark}
					onClick={() => setMode(p => !p)}
					type="button"
				>
					{mode ? "sign up" : "login"}
				</ModeToggler>
			</Form>
			<ButtonLg dark={dark} onClick={onSubmitHandler}>
				{mode ? "login" : "sign up"}
			</ButtonLg>
		</Container>
	);
};

export default CredentialsPage;
