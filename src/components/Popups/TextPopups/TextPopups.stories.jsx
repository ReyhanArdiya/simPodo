import { action } from "@storybook/addon-actions";
import TextPopupLg from "./Lg/TextPopupLg";
import TextPopupSm from "./Sm/TextPopupSm";

/** @type {import("@storybook/react").Meta} */
const Meta = {
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

export const TextPopups = ({
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

export default Meta;
