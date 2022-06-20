import ButtonLg from "./ButtonLg";
import ButtonSm from "./ButtonSm";
import LeftArrowButt from "./LeftArrowButt";
import ThemeToggler from "./ThemeToggler";

/** @type {import("@storybook/react").Meta} */
const Meta = {
	argTypes : {
		children : {
			defaultValue : "+",
			type         : "string",
		},
		dark : {
			defaultValue : false,
			type         : "boolean",
		},
		onClick : { action : "clicked", },
	}
};

export const Large = args => <ButtonLg {...args} />;
export const Small = args => <ButtonSm {...args} />;
export const LeftArrow = args => <LeftArrowButt {...args} />;
export const Theme = args => <ThemeToggler {...args} />;

export default Meta;