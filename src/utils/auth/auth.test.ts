import InvalidEmailError from "../../models/errors/invalid-email-error";
import InvalidPassError, { PassErrors } from "../../models/errors/invalid-pass-error";
import validateEmail from "./validateEmail";
import validatePass from "./validatePass";

describe("validateEmail", () => {
	it("validates the correct email", () => {
		expect(validateEmail("email@gmail.com")).toBe(true);
		expect(validateEmail("1email@gmail.com")).toBe(true);
		expect(validateEmail("email1@gmail.com")).toBe(true);
		// Apparently .co is valid? Mkay
		expect(validateEmail("email1@gmail.co")).toBe(true);
	});

	it("throws an InvalidEmailError when it receives an invalid email", () => {
		expect(() => validateEmail("fjeujfeuie")).toThrow(InvalidEmailError);
		expect(() => validateEmail("fjeujfeuie@")).toThrow(InvalidEmailError);
		expect(() => validateEmail("fjeujfeuie@gmail")).toThrow(InvalidEmailError);
		expect(() => validateEmail("fjeujfeuie@gmail.o")).toThrow(InvalidEmailError);
		expect(() => validateEmail("fjeujfeuie@gmail.com1")).toThrow(InvalidEmailError);
		expect(() => validateEmail("fjeujfeuie@com")).toThrow(InvalidEmailError);
	});
});

describe("validatePass", () => {
	it("passes when pass is at least 8 chars", () => {
		expect(validatePass("12345678Helloworld")).toBe(true);
		expect(validatePass("iameightDharactesa2tleast")).toBe(true);
		expect(validatePass("helloWORLDDDDD3")).toBe(true);
	});
	it("throws when pass is not at least 8 chars", () => {
		const tooShortError = new InvalidPassError(PassErrors.TOO_SHORT);

		expect(() => validatePass("1")).toThrow(tooShortError);
		expect(() => validatePass("shoD2t")).toThrow(tooShortError);
		expect(() => validatePass("stDF3a")).toThrow(tooShortError);
	});

	it("passes when pass is alphanumeric", () => {
		expect(validatePass("iamcorrE3ct")).toBe(true);
		expect(validatePass("h1h1dwuiEdjwdi")).toBe(true);
		expect(validatePass("amajingdwEdjwi1")).toBe(true);
	});
	it("throws when pass is not alphanumeric", () => {
		const notAlphanumericError = new InvalidPassError(PassErrors.NOT_ALPHANUMERIC);

		expect(() => validatePass("12345678910")).toThrow(notAlphanumericError);
		expect(() => validatePass("thisisWRONGtoo")).toThrow(notAlphanumericError);
		expect(() => validatePass("???whatareyouTALKINGABOUT")).toThrow(notAlphanumericError);
	});

	it("passes when pass has at least 1 capital letter", () => {
		expect(validatePass("IwillbeBACKfj3eifejf")).toBe(true);
		expect(validatePass("Thisisright12233442")).toBe(true);
		expect(validatePass("harHAR1223442")).toBe(true);
	});
	it("throws when pass doesn't have at least 1 capital letter", () => {
		const noCapitalError = new InvalidPassError(PassErrors.NO_CAPITAL);

		expect(() => validatePass("nopenopenope3")).toThrow(noCapitalError);
		expect(() => validatePass("shortsuperdupershor1t")).toThrow(noCapitalError);
		expect(() => validatePass("stackhellowrodlsmeo1")).toThrow(noCapitalError);
	});

	it("handles special characters", () => {
		expect(validatePass("IwillbeBACKfj3ei!fejf")).toBe(true);
		expect(validatePass("Thisisright12233#442")).toBe(true);
		expect(validatePass("harHAR12234@42")).toBe(true);
	});
});
