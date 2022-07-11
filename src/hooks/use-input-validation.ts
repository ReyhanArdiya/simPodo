import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type ValidationCb = (inputVal: string, setErrMsg:Dispatch<SetStateAction<string | null>>) => boolean;

// TODO Move errors and error msg logic here
const useInputValidation = (
	validationCb: ValidationCb
) => {
	const [ errMsg, setErrMsg ] = useState<string | null>(null);
	const [ isValid, setIsValid ] = useState(false);
	const [ wasTouched, setWasTouched ] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const validateInput = (force = false) => {
		if (force) {
			setIsValid(validationCb(inputRef.current!.value, setErrMsg));
		} else {
			setIsValid(wasTouched && validationCb(inputRef.current!.value, setErrMsg));
		}
	};
	const touchInput = () => setWasTouched(true);

	useEffect(() => {
		inputRef.current!.onfocus = () => setWasTouched(true);
	}, []);

	const resetInput = (validationOnly = false) => {
		setWasTouched(false);
		setErrMsg(null);
		setIsValid(false);
		if (!validationOnly) {
			inputRef.current!.value = "";
		}
	};

	return {
		errMsg,
		inputRef,
		isValid,
		resetInput,
		setErrMsg,
		touchInput,
		validateInput,
		wasTouched,
	};
};

export default useInputValidation;
