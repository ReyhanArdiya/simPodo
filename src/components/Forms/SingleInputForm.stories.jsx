import { action } from "@storybook/addon-actions";
import SingleInputFormComponent from "./SingleInputForm";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	component : SingleInputFormComponent,
	args      : {
		title      : "Enter New Username",
		onSubmit   : action("updated!"),
		buttonText : "update",
		dark       : false
	}
};

const Template = args => <SingleInputFormComponent {...args} />;

export const SingleInputForm = Template.bind({});


export default Meta;