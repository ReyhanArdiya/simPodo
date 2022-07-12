import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import TextPopupLg from "./Lg/TextPopupLg";
import TextPopupSm from "./Sm/TextPopupSm";

interface Args {
	selections: number;
	dark: boolean;
	selectionText: string;
	backgroundColor: string;
	size: string;
}

const meta: Meta<Args> = {
	args : {
		selections    : 5,
		dark          : false,
		selectionText : "Personal",
	},
	argTypes : {
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
		}
	}
};

export const TextPopups: StoryFn<Args> = ({
	size,
	selections,
	backgroundColor,
	selectionText,
	...args
}) => {
	const text = [];
	for (let i = 0; i < selections; i++) {
		text.push({
			backgroundColor : backgroundColor,
			text            : selectionText,
			onClick         : action("clicked").bind(null, selectionText),
			active          : false
		});
	}

	if (size === "sm") {
		return <TextPopupSm
			{...args}
			text={text}
		/>;
	} else {
		return <TextPopupLg
			{...args}
			text={text}
		/>;
	}
};

export default meta;
