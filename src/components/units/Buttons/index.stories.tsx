import type { HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import ButtonLg from "./ButtonLg";
import ButtonSm from "./ButtonSm";
import LeftArrowButt from "./LeftArrowButt";
import ThemeToggler from "./ThemeToggler";

interface Args {
	children: string;
	dark: boolean;
	onClick: HandlerFunction
}


const meta: Meta<Args> = {
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

export const Large: StoryFn<Args> = args => <ButtonLg {...args} />;
Large.parameters = { jest : [ "ButtonLg.test.jsx" ] };

export const Small: StoryFn<Args> = args => <ButtonSm {...args} />;
Small.parameters = { jest : [ "ButtonSm.test.jsx" ] };

export const LeftArrow: StoryFn<Args> = args => <LeftArrowButt {...args} />;
export const Theme: StoryFn<Args> = args => <ThemeToggler {...args} />;

export default meta;