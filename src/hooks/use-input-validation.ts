import { RefObject, useEffect, useRef, useState } from "react";

interface UseInputValidationReturns {
	inputRef: RefObject<HTMLInputElement>;
	isValid: boolean;
	validateInput(force?: boolean): void;
	touchInput(): void;
	wasTouched: boolean;
}

const useInputValidation = (
	validationCb: (inputval: string) => boolean
): UseInputValidationReturns => {
	const [ wasTouched, setWasTouched ] = useState(false);
	const [ isValid, setIsValid ] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const validateInput = (force = false) => {
		if (force) {
			setIsValid(validationCb(inputRef.current!.value));
		} else {
			setIsValid(wasTouched && validationCb(inputRef.current!.value));
		}
	};
	const touchInput = () => setWasTouched(true);

	useEffect(() => {
		inputRef.current!.onfocus = () => setWasTouched(true);
	}, []);

	return {
		inputRef,
		isValid,
		touchInput,
		validateInput,
		wasTouched
	};
};

export default useInputValidation;
