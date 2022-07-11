import { FormEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useInputValidation from "../../../hooks/use-input-validation";
import { themeSliceSelectors } from "../../../store/theme/slice";
import ButtonLg from "../../units/Buttons/ButtonLg";
import SemanticInput from "../../units/Forms/Inputs/SemanticInput";
import AuthPageLayout from "../../units/Layouts/AuthPageLayout";
import Spinner from "../../units/Loading/Spinner";
import Bad from "../../units/Popups/Flash/Bad";

const StatusContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	flex-grow: 1;
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

export interface UsernamePageProps {
	onSubmit(username: string): Promise<void>;
}

const UsernamePage = ({ onSubmit }: UsernamePageProps) => {
	const dark = useSelector(themeSliceSelectors.selectIsDark);

	const [ loading, setLoading ] = useState(false);
	const [ flash, setFlash ] = useState({
		show    : false,
		message : ""
	});

	// No validation fn here since we don't need client side validaiton for username
	const { inputRef, isValid, validateInput, resetInput } = useInputValidation(() => true);

	const onSubmitHandler: FormEventHandler = async () => {
		setLoading(false);
		setFlash({
			show    : false,
			message : ""
		});

		// CMT I set force to true to handle when the user submits but they haven't touched.
		validateInput(true);

		try {
			if (isValid) {
				setLoading(true);

				// We'll post username from onSubmit and if there is an error like duplicate
				// we'll display it thru here
				await onSubmit(inputRef.current!.value);
				resetInput();
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
		<AuthPageLayout id="username" title="Enter a Username">
			<Form name="username">
				<SemanticInput
					dark={dark}
					// errorMsg={errMsg}
					formNoValidate
					onChange={() => validateInput()}
					placeholder="username"
					ref={inputRef}
					type="text"
					// valid={isValid}
				/>
			</Form>

			{!loading && (
				<ButtonLg dark={dark} onClick={onSubmitHandler}>
					submit
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

export default UsernamePage;
