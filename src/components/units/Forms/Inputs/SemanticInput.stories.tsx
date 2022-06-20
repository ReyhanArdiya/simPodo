import { action } from "@storybook/addon-actions";
import SemanticInputComponent from "./SemanticInput";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	args : {
		dark     : true,
		onChange : e => action("onChange")(e.target.value)
	},
	component : SemanticInputComponent,
	argTypes  : {
		valid : {
			control      : { type : "boolean", },
			defaultValue : false
		},
		errorMsg : {
			type        : "string",
			description : "This only shows error when false valid and has errorMsg"
		},
	},
	parameters : { controls : { expanded : true } }
};

const Template = args => <SemanticInputComponent {...args} />;

export const Default = Template.bind({});

export const ValidInput = Template.bind({});
ValidInput.args = { valid : true };

export const InvalidInput = Template.bind({});
InvalidInput.args = {
	valid    : false,
	errorMsg : "This is an error message"
};

export default Meta;