import SelectionFormComponent from "./SelectionForm";
import { action, HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";

interface Args {
	button1: {
		text: string;
		onClick: HandlerFunction;
	};
	button2: {
		text: string;
		onClick: HandlerFunction;
	};
	title: string;
	dark: boolean;
}

const meta: Meta<Args> = {
	component : SelectionFormComponent,
	args      : {
		button1 : {
			text    : "1",
			onClick : action("clicked!")
		},
		button2 : {
			text    : "2",
			onClick : action("clicked!")
		},
		title : "Select",
		dark  : false
	}
};

const Template: StoryFn<Args> = args => <SelectionFormComponent {...args} />;
export const Default = Template.bind({});

export const Light = Template.bind({});
Light.args = { dark : false };

export const Dark = Template.bind({});
Dark.args = { dark : true };

export default meta;
