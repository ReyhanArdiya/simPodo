import { action, HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import SingleInputFormComponent, { SingleInputFormProps } from "./SingleInputForm";

interface Args {
	title?: string;
	onSubmit?: HandlerFunction;
	buttonText?: string;
	dark?: boolean;
}

const meta: Meta<Args> = {
	component : SingleInputFormComponent,
	args      : {
		title      : "Enter New Username",
		onSubmit   : action("updated!"),
		buttonText : "update",
		dark       : false
	}
};

const Template: StoryFn<
	Args & SingleInputFormProps
	> = args => {
		return <SingleInputFormComponent {...args} />;
	};
export const SingleInputForm = Template.bind({});

export default meta;
