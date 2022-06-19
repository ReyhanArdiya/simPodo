import SelectionFormComponent from "./SelectionForm";
import { action } from "@storybook/addon-actions";

/** @type {import("@storybook/react").Meta} */
const Meta = {
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

const Template = args => <SelectionFormComponent {...args} />;
export const Default = Template.bind({});

export const Light = Template.bind({});
Light.args = { dark : false, };

export const Dark = Template.bind({});
Dark.args = { dark : true, };


export default Meta;