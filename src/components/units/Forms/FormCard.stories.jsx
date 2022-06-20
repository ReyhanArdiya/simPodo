import FormCardComponent from "./FormCard";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	component : FormCardComponent,
	args      : { dark : true },
};

export const FormCard = args => <FormCardComponent {...args} />;

export default Meta;