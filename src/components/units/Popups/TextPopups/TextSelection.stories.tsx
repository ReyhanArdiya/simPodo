import { action, HandlerFunction } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import TextSelectionLg from "./Lg/TextSelectionLg";
import TextSelectionSm from "./Sm/TextSelectionSm";
import TextSelectionComponent from "./TextSelection";

interface Args {
	backgroundColor: string;
	size: string;
	children: string;
	active: boolean;
	dark: boolean;
	onClick: HandlerFunction;
}

const meta: Meta<Args> = {
	component : TextSelectionComponent,
	argTypes  : {
		backgroundColor : {
			control      : { type : "color" },
			defaultValue : "teal"
		},
		size : {
			control : {
				type    : "radio",
				options : [ "sm", "lg" ]
			},
			defaultValue : "sm"
		},
		onClick : action("clicked!")
	},
	args : {
		children : "Personal",
		active   : false,
		dark     : false,
	},
	parameters : { actions : { handles : [ "mouseenter" ] } }
};

export const TextSelection: StoryFn<Args> = ({ size, ...args }) => {
	if (size === "sm") {
		return <TextSelectionSm {...args} />;
	} else {
		return <TextSelectionLg {...args} />;
	}

};


export default meta;
