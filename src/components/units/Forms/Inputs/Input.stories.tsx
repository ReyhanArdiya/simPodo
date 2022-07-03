import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import type { ChangeEvent } from "react";
import InputComponent from "./Input";

interface Args {
	dark?: boolean;
	onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const meta: Meta<Args> = {
	args : {
		dark : true,
		onChange(e) {
			return action("onChange")(e.target.value);
		}
	},
	component : InputComponent
};

export const Input: StoryFn<Args> = args => <InputComponent as="input" {...args} />;

export default meta;
