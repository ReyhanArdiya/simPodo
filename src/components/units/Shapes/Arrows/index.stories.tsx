import { action, HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

interface Args {
	dark: boolean;
	onClick: HandlerFunction;
	direction: string;
}

const meta: Meta<Args> = {
	args : {
		dark    : false,
		onClick : action("Clicked"),
	},
	argTypes : {
		direction : {
			control : {
				type    : "radio",
				options : [ "left", "right", "down" ],
			},
			defaultValue : "left",
		}
	}
};

export const Arrows: StoryFn<Args> = ({ direction, ...args }) => {
	switch (direction) {
		case "down" :
			return <ArrowDown {...args} />;
		case "right" :
			return <ArrowRight {...args} />;
		case "left" :
		default :
			return <ArrowLeft {...args} />;
	}
};


export default meta;