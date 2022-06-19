import GradientRectComponent from "./GradientRect";


/** @type {import("@storybook/react").Meta} */
const Meta = {
	component  : GradientRectComponent,
	parameters : { backgrounds : { default : "dark", } }
};

export const GradientRect = args => <GradientRectComponent {...args} />;

export default Meta;