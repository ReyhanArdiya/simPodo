import type { HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import ButtonLg from "./ButtonLg";
import ButtonSm from "./ButtonSm";
import LeftArrowButt from "./LeftArrowButt";
import ThemeToggler from "./ThemeToggler";

interface Args {
	children: string;
	dark: boolean;
	onClick: HandlerFunction;
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

export const Small: StoryFn<Args> = args => <ButtonSm {...args} />;

export const LeftArrow: StoryFn<Args> = args => <LeftArrowButt {...args} />;
export const Theme: StoryFn<Args> = args => <ThemeToggler {...args} />;

export default meta;
