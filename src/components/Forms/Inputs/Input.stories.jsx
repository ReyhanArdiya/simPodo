import { action } from "@storybook/addon-actions";
import InputComponent from "./Input";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	args : {
		dark     : true,
		onChange : e => action("onChange")(e.target.value)
	},
	component : InputComponent
};

export const Input = args => <InputComponent {...args} />;

export default Meta;