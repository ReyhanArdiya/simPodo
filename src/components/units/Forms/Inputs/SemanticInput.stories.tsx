import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import type { ChangeEvent } from "react";
import SemanticInputComponent from "./SemanticInput";

interface Args {
	dark?: boolean;
	onChange?(e: ChangeEvent<HTMLInputElement>): void;
	valid?: boolean;
	errorMsg?: string;
}

const meta: Meta<Args> = {
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

const Template: StoryFn<Args> = args => <SemanticInputComponent {...args} />;

export const Default = Template.bind({});

export const ValidInput = Template.bind({});
ValidInput.args = { valid : true };

export const InvalidInput = Template.bind({});
InvalidInput.args = {
	valid    : false,
	errorMsg : "This is an error message"
};

export default meta;