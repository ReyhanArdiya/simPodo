import { FormEventHandler, MouseEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useInputValidation from "../../../hooks/use-input-validation";
import InvalidEmailError from "../../../models/errors/invalid-email-error";
import InvalidPassError from "../../../models/errors/invalid-pass-error";
import { themeSliceSelectors } from "../../../store/theme/slice";
import validateEmail from "../../../utils/auth/validateEmail";
import validatePass from "../../../utils/auth/validatePass";
import ButtonLg from "../../units/Buttons/ButtonLg";
import SemanticInput from "../../units/Forms/Inputs/SemanticInput";
import AuthPageLayout from "../../units/Layouts/AuthPageLayout";
import Spinner from "../../units/Loading/Spinner";
import Bad from "../../units/Popups/Flash/Bad";

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

const StatusContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	flex-grow: 1;
`;

export interface CredentialsPageProps {
	onSubmit(
		email: string,
		password: string,
		login: CredentialsPageProps["login"]
	): Promise<void>;
	onModeClick(login: boolean): void;
	login?: boolean;
}

const CredentialsPage = ({
	onSubmit,
	onModeClick,
	login = true
}: CredentialsPageProps) => {
	const dark = useSelector(themeSliceSelectors.selectIsDark);

	const [ mode, setMode ] = useState(login);
	const [ loading, setLoading ] = useState(false);
	const [ flash, setFlash ] = useState({
		show    : false,
		message : ""
	});

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

	const modeTogglerHandler: MouseEventHandler = () => {
		setMode(p => !p);
		onModeClick(!mode);
	};

	const onSubmitHandler: FormEventHandler = async () => {
		setLoading(false);
		setFlash({
			show    : false,
			message : ""
		});

		// CMT I set force to true to handle when the user submits but they haven't touched.
		validateEmailInput(true);
		validatePassInput(true);

		try {
			if (isEmailValid && isPassValid) {
				setLoading(true);

				// We'll post from onSubmit and if it is rejected, it will be caught
				// and displayed
				await onSubmit(
					emailRef.current!.value,
					passwordRef.current!.value,
					login
				);
				resetEmailInput();
				resetPassInput();
			}
		} catch (err) {
			if (err instanceof Error) {
				setLoading(false);
				setFlash({
					show    : true,
					message : err.message
				});
			}
		}
	};

	return (
		<AuthPageLayout id="credentials" title="simPodo">
			<Form name="credentials" onSubmit={e => e.preventDefault()}>
				<SemanticInput
					dark={dark}
					errorMsg={emailErrMsg}
					formNoValidate
					onChange={() => validateEmailInput()}
					placeholder="email"
					ref={emailRef}
					type="email"
					valid={isEmailValid}
				/>
				<SemanticInput
					dark={dark}
					errorMsg={passErrMsg}
					formNoValidate
					onChange={() => validatePassInput()}
					placeholder="password"
					ref={passwordRef}
					type="password"
					valid={isPassValid}
				/>
				<ModeToggler
					dark={dark}
					onClick={modeTogglerHandler}
					type="button"
				>
					{mode ? "sign up" : "login"}
				</ModeToggler>
			</Form>
			{!loading && (
				<ButtonLg dark={dark} onClick={onSubmitHandler}>
					{mode ? "login" : "sign up"}
				</ButtonLg>
			)}
			<StatusContainer>
				{loading ?
					<Spinner />				:
					<Bad show={flash.show}>{flash.message}</Bad>
				}
			</StatusContainer>
		</AuthPageLayout>
	);
};

export default CredentialsPage;
